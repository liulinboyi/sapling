/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This software may be used and distributed according to the terms of the
 * GNU General Public License version 2.
 */

use std::env;
use std::ffi::OsStr;
use std::io::Write;
use std::path::Path;
use std::path::PathBuf;
use std::process::Command;

use anyhow::Context;
use anyhow::Result;
use async_runtime::block_unless_interrupted as block_on;
use configmodel::config::Config;
use manifest_tree::TreeManifest;
use repo::repo::Repo;
use treestate::treestate::TreeState;
use types::HgId;
use util::file::atomic_write;
use util::path::absolute;
use util::path::create_shared_dir;
use util::path::expand_path;
use uuid::Uuid;

pub fn get_default_directory(config: &dyn Config) -> Result<PathBuf> {
    Ok(absolute(
        if let Some(default_dir) = config.get("clone", "default-destination-dir") {
            expand_path(default_dir)
        } else {
            env::current_dir()?
        },
    )?)
}

#[derive(Debug, thiserror::Error)]
pub enum WorkingCopyError {
    #[error("No such checkout target '{0}'")]
    NoSuchTarget(HgId),

    #[error(transparent)]
    Io(#[from] std::io::Error),

    #[error(transparent)]
    Other(#[from] anyhow::Error),
}

pub fn init_working_copy(
    repo: &mut Repo,
    target: HgId,
    sparse_profiles: Vec<String>,
) -> Result<(), WorkingCopyError> {
    let roots = repo.dag_commits()?.read().to_dyn_read_root_tree_ids();
    let tree_id = match block_on(roots.read_root_tree_ids(vec![target.clone()]))??
        .into_iter()
        .next()
    {
        Some((_, tree_id)) => tree_id,
        None => return Err(WorkingCopyError::NoSuchTarget(target)),
    };

    let tree_store = repo.tree_store()?;
    let file_store = repo.file_store()?;

    let source_mf = TreeManifest::ephemeral(tree_store.clone());
    let target_mf = TreeManifest::durable(tree_store.clone(), tree_id.clone());

    if !sparse_profiles.is_empty() {
        let mut sparse_contents: Vec<u8> = Vec::new();
        for profile in sparse_profiles {
            write!(&mut sparse_contents, "%include {}\n", profile)?;
        }
        atomic_write(&repo.dot_hg_path().join("sparse"), |f| {
            f.write_all(&sparse_contents)
        })?;
    }

    let ts_dir = repo.dot_hg_path().join("treestate");
    create_shared_dir(&ts_dir)?;

    let ts_path = ts_dir.join(format!("{:x}", Uuid::new_v4()));

    let mut ts = TreeState::open(&ts_path, None)?;

    checkout::clone::checkout(
        repo.config(),
        repo.path(),
        &source_mf,
        &target_mf,
        file_store.clone(),
        &mut ts,
        target,
    )?;

    Ok(())
}

#[derive(Debug, thiserror::Error)]
pub enum EdenCloneError {
    #[error("Failed cloning eden checkout\n Stdout: '{0}'\n Stderr: '{1}'")]
    ExeuctionFailure(String, String),
    #[error("edenfs.command config is not set")]
    MissingCommandConfig(),
}

pub fn eden_clone(backing_repo: &Repo, working_copy: &Path, target: Option<HgId>) -> Result<()> {
    let config = backing_repo.config();
    let eden_command = config.get_opt::<String>("edenfs", "command")?;
    let mut clone_command = match eden_command {
        Some(cmd) => Command::new(cmd),
        None => return Err(EdenCloneError::MissingCommandConfig().into()),
    };

    // allow tests to specify different configuration directories from prod defaults
    if let Some(base_dir) = config.get_opt::<PathBuf>("edenfs", "basepath")? {
        clone_command.args([
            "--config-dir".into(),
            base_dir.join("eden"),
            "--etc-eden-dir".into(),
            base_dir.join("etc_eden"),
            "--home-dir".into(),
            base_dir.join("home"),
        ]);
    }

    clone_command.args([
        OsStr::new("clone"),
        backing_repo.path().as_os_str(),
        working_copy.as_os_str(),
    ]);

    if let Some(rev) = target {
        clone_command.args(["-r", &rev.to_hex()]);
    } else {
        clone_command.arg("--allow-empty-repo");
    }

    let output = clone_command.output().with_context(|| {
        format!(
            "failed to execute {}",
            clone_command.get_program().to_string_lossy()
        )
    })?;

    if !output.status.success() {
        return Err(EdenCloneError::ExeuctionFailure(
            String::from_utf8_lossy(&output.stdout).to_string(),
            String::from_utf8_lossy(&output.stderr).to_string(),
        )
        .into());
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use std::collections::BTreeMap;

    use tempfile::TempDir;

    use super::*;

    #[test]
    pub fn test_get_target_dir() -> Result<()> {
        let tmpdir = TempDir::new()?;
        let mut config: BTreeMap<String, String> = BTreeMap::new();

        // Test with non-set default destination directory
        assert_eq!(
            get_default_directory(&config)?,
            env::current_dir()?.as_path()
        );

        // Test setting default destination directory
        let path = tmpdir.path().join("foo").join("bar");
        config.insert(
            "clone.default-destination-dir".to_string(),
            path.to_str().unwrap().to_string(),
        );
        assert_eq!(get_default_directory(&config).unwrap(), path,);

        Ok(())
    }
}
