/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This software may be used and distributed according to the terms of the
 * GNU General Public License version 2.
 */

use anyhow::{anyhow, Error};
use blobrepo::BlobRepo;
use blobrepo_hg::BlobRepoHg;
use blobstore::Loadable;
use clap::{App, Arg, ArgMatches, SubCommand};
use cmdlib::{
    args::{self, MononokeMatches},
    helpers::csid_resolve,
};
use context::CoreContext;
use derived_data::{BonsaiDerivable, BonsaiDerived};
use derived_data_utils::{
    derived_data_utils, derived_data_utils_for_backfill, POSSIBLE_DERIVED_TYPES,
};
use fbinit::FacebookInit;
use fsnodes::RootFsnodeId;
use futures::{
    compat::Future01CompatExt,
    future::{try_join_all, FutureExt as PreviewFutureExt},
    TryStreamExt,
};
use manifest::ManifestOps;
use mercurial_derived_data::MappedHgChangesetId;
use mononoke_types::{ChangesetId, ContentId, FileType, MPath};
use skeleton_manifest::RootSkeletonManifestId;
use slog::{info, Logger};
use std::{
    collections::{HashMap, HashSet},
    fmt,
};
use unodes::RootUnodeManifestId;

use crate::error::SubcommandError;

pub const DERIVED_DATA: &str = "derived-data";
const SUBCOMMAND_EXISTS: &str = "exists";
const SUBCOMMAND_VERIFY_MANIFESTS: &str = "verify-manifests";

const ARG_HASH_OR_BOOKMARK: &str = "hash-or-bookmark";
const ARG_TYPE: &str = "type";
const ARG_IF_DERIVED: &str = "if-derived";
const ARG_BACKFILL: &str = "backfill";

const MANIFEST_DERIVED_DATA_TYPES: &[&str] = &[
    RootFsnodeId::NAME,
    MappedHgChangesetId::NAME,
    RootUnodeManifestId::NAME,
    RootSkeletonManifestId::NAME,
];

pub fn build_subcommand<'a, 'b>() -> App<'a, 'b> {
    SubCommand::with_name(DERIVED_DATA)
        .about("request information about derived data")
        .subcommand(
            SubCommand::with_name(SUBCOMMAND_EXISTS)
                .about("check if derived data has been generated")
                .arg(
                    Arg::with_name(ARG_BACKFILL)
                        .long("backfill")
                        .help("use backfilling config rather than enabled config"),
                )
                .arg(
                    Arg::with_name(ARG_TYPE)
                        .help("type of derived data")
                        .takes_value(true)
                        .possible_values(POSSIBLE_DERIVED_TYPES)
                        .required(true),
                )
                .arg(
                    Arg::with_name(ARG_HASH_OR_BOOKMARK)
                        .help("(hg|bonsai) commit hash or bookmark")
                        .takes_value(true)
                        .multiple(true)
                        .required(true),
                ),
        )
        .subcommand(
            SubCommand::with_name(SUBCOMMAND_VERIFY_MANIFESTS)
                .about("compare check if derived data has been generated")
                .arg(
                    Arg::with_name(ARG_TYPE)
                        .help("types of derived data representing a manifest")
                        .long(ARG_TYPE)
                        .takes_value(true)
                        .multiple(true)
                        .possible_values(MANIFEST_DERIVED_DATA_TYPES),
                )
                .arg(
                    Arg::with_name(ARG_HASH_OR_BOOKMARK)
                        .help("(hg|bonsai) commit hash or bookmark")
                        .takes_value(true)
                        .required(true),
                )
                .arg(
                    Arg::with_name(ARG_IF_DERIVED)
                        .help("only verify the manifests if they are already derived")
                        .long(ARG_IF_DERIVED),
                ),
        )
}

pub async fn subcommand_derived_data<'a>(
    fb: FacebookInit,
    logger: Logger,
    matches: &'a MononokeMatches<'_>,
    sub_m: &'a ArgMatches<'_>,
) -> Result<(), SubcommandError> {
    let ctx = CoreContext::new_with_logger(fb, logger.clone());
    let repo = args::open_repo(fb, &logger, &matches).await?;

    match sub_m.subcommand() {
        (SUBCOMMAND_EXISTS, Some(arg_matches)) => {
            let hashes_or_bookmarks: Vec<_> = arg_matches
                .values_of(ARG_HASH_OR_BOOKMARK)
                .map(|matches| matches.map(|cs| cs.to_string()).collect())
                .unwrap();

            let derived_data_type = arg_matches
                .value_of(ARG_TYPE)
                .map(|m| m.to_string())
                .unwrap();

            let backfill = arg_matches.is_present(ARG_BACKFILL);

            check_derived_data_exists(ctx, repo, derived_data_type, hashes_or_bookmarks, backfill)
                .await
        }
        (SUBCOMMAND_VERIFY_MANIFESTS, Some(arg_matches)) => {
            let hash_or_bookmark = arg_matches
                .value_of(ARG_HASH_OR_BOOKMARK)
                .map(|m| m.to_string())
                .unwrap();

            let derived_data_types = arg_matches
                .values_of(ARG_TYPE)
                .map(|matches| matches.map(|cs| cs.to_string()).collect())
                .unwrap_or_else(|| {
                    MANIFEST_DERIVED_DATA_TYPES
                        .into_iter()
                        .map(|s| String::from(*s))
                        .collect::<Vec<_>>()
                });

            let fetch_derived = arg_matches.is_present(ARG_IF_DERIVED);

            verify_manifests(
                ctx,
                repo,
                derived_data_types,
                hash_or_bookmark,
                fetch_derived,
            )
            .await
        }
        _ => Err(SubcommandError::InvalidArgs),
    }
}

async fn check_derived_data_exists(
    ctx: CoreContext,
    repo: BlobRepo,
    derived_data_type: String,
    hashes_or_bookmarks: Vec<String>,
    backfill: bool,
) -> Result<(), SubcommandError> {
    let derived_utils = if backfill {
        derived_data_utils_for_backfill(&repo, derived_data_type)?
    } else {
        derived_data_utils(&repo, derived_data_type)?
    };

    let cs_id_futs: Vec<_> = hashes_or_bookmarks
        .into_iter()
        .map(|hash_or_bm| csid_resolve(ctx.clone(), repo.clone(), hash_or_bm).compat())
        .collect();

    let cs_ids = try_join_all(cs_id_futs).await?;

    let pending = derived_utils
        .pending(ctx.clone(), repo.clone(), cs_ids.clone())
        .await?;

    for cs_id in cs_ids {
        if pending.contains(&cs_id) {
            println!("Not Derived: {}", cs_id);
        } else {
            println!("Derived: {}", cs_id);
        }
    }

    Ok(())
}

async fn verify_manifests(
    ctx: CoreContext,
    repo: BlobRepo,
    derived_data_types: Vec<String>,
    hash_or_bookmark: String,
    fetch_derived: bool,
) -> Result<(), SubcommandError> {
    let cs_id = csid_resolve(ctx.clone(), repo.clone(), hash_or_bookmark)
        .compat()
        .await?;
    let mut manifests = HashSet::new();
    let mut futs = vec![];
    for ty in derived_data_types {
        if ty == RootFsnodeId::NAME {
            manifests.insert(ManifestType::Fsnodes);
            futs.push(list_fsnodes(&ctx, &repo, cs_id, fetch_derived).boxed());
        } else if ty == RootUnodeManifestId::NAME {
            manifests.insert(ManifestType::Unodes);
            futs.push(list_unodes(&ctx, &repo, cs_id, fetch_derived).boxed());
        } else if ty == MappedHgChangesetId::NAME {
            manifests.insert(ManifestType::Hg);
            futs.push(list_hg_manifest(&ctx, &repo, cs_id).boxed());
        } else if ty == RootSkeletonManifestId::NAME {
            manifests.insert(ManifestType::Skeleton);
            futs.push(list_skeleton_manifest(&ctx, &repo, cs_id, fetch_derived).boxed());
        } else {
            return Err(anyhow!("unknown derived data manifest type").into());
        }
    }
    let mut combined: HashMap<MPath, FileContentValue> = HashMap::new();
    let contents = try_join_all(futs).await?;
    info!(ctx.logger(), "Combining {} manifests", contents.len());
    for (mf_type, map) in contents {
        for (path, new_val) in map {
            combined
                .entry(path)
                .or_insert_with(FileContentValue::new)
                .update(new_val.clone());
        }
        info!(ctx.logger(), "Completed {} manifest", mf_type);
    }

    info!(ctx.logger(), "Checking {} paths", combined.len());
    let mut invalid_count = 0u64;
    for (path, val) in combined {
        if !val.is_valid(&manifests) {
            println!("Invalid!\nPath: {}", path);
            println!("{}\n", val);
            invalid_count += 1;
        }
    }
    if invalid_count == 0 {
        info!(ctx.logger(), "Check complete");
    } else {
        info!(ctx.logger(), "Found {} invalid paths", invalid_count);
    }

    Ok(())
}

#[derive(Clone, Default)]
struct FileContentValue {
    values: Vec<ManifestData>,
}

impl fmt::Display for FileContentValue {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        for (i, value) in self.values.iter().enumerate() {
            if i > 0 {
                write!(f, " ")?;
            }
            write!(f, "({})", value)?;
        }
        Ok(())
    }
}

impl FileContentValue {
    pub fn new() -> Self {
        Self { values: vec![] }
    }

    pub fn update(&mut self, val: ManifestData) {
        self.values.push(val);
    }

    pub fn is_valid(&self, expected_manifests: &HashSet<ManifestType>) -> bool {
        if self.values.is_empty() {
            return false;
        }

        let manifest_types: HashSet<_> = self
            .values
            .iter()
            .map(ManifestData::manifest_type)
            .collect();
        if &manifest_types != expected_manifests {
            return false;
        }
        let contents: HashSet<_> = self
            .values
            .iter()
            .map(ManifestData::content)
            .flatten()
            .collect();
        // Skeleton manifests have no content, so 0 is valid for them.
        // Otherwise, we should have exactly one.
        contents.len() <= 1
    }
}

#[derive(Clone, Hash, Eq, PartialEq)]
enum ManifestType {
    Fsnodes,
    Hg,
    Unodes,
    Skeleton,
}

#[derive(Clone, Hash, Eq, PartialEq)]
enum ManifestData {
    Fsnodes(FileType, ContentId),
    Hg(FileType, ContentId),
    Unodes(FileType, ContentId),
    Skeleton,
}

impl fmt::Display for ManifestType {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        use ManifestType::*;

        match &self {
            Fsnodes => write!(f, "Fsnodes"),
            Hg => write!(f, "Hg"),
            Unodes => write!(f, "Unodes"),
            Skeleton => write!(f, "Skeleton"),
        }
    }
}

impl ManifestData {
    fn manifest_type(&self) -> ManifestType {
        use ManifestData::*;

        match self {
            Fsnodes(..) => ManifestType::Fsnodes,
            Hg(..) => ManifestType::Hg,
            Unodes(..) => ManifestType::Unodes,
            Skeleton => ManifestType::Skeleton,
        }
    }

    fn content(&self) -> Option<(FileType, ContentId)> {
        use ManifestData::*;

        match self {
            Fsnodes(ty, id) | Hg(ty, id) | Unodes(ty, id) => Some((*ty, *id)),
            Skeleton => None,
        }
    }
}

impl fmt::Display for ManifestData {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        use ManifestData::*;
        match &self {
            Fsnodes(ty, id) | Hg(ty, id) | Unodes(ty, id) => {
                write!(f, "{}: {}, {}", self.manifest_type(), ty, id)
            }
            Skeleton => write!(f, "{}: present", self.manifest_type()),
        }
    }
}

pub(crate) async fn derive_or_fetch<T: BonsaiDerived>(
    ctx: &CoreContext,
    repo: &BlobRepo,
    csid: ChangesetId,
    fetch_derived: bool,
) -> Result<T, Error> {
    if fetch_derived {
        let value = T::fetch_derived(ctx, repo, &csid).await?;
        value.ok_or_else(|| anyhow!("{} are not derived for {}", T::NAME, csid))
    } else {
        Ok(T::derive(ctx, repo, csid).await?)
    }
}

async fn list_hg_manifest(
    ctx: &CoreContext,
    repo: &BlobRepo,
    cs_id: ChangesetId,
) -> Result<(ManifestType, HashMap<MPath, ManifestData>), Error> {
    let hg_cs_id = repo
        .get_hg_from_bonsai_changeset(ctx.clone(), cs_id)
        .await?;

    let hg_cs = hg_cs_id.load(ctx, repo.blobstore()).await?;
    let mfid = hg_cs.manifestid();

    let map: HashMap<_, _> = mfid
        .list_leaf_entries(ctx.clone(), repo.get_blobstore())
        .map_ok(|(path, (ty, filenode_id))| async move {
            let filenode = filenode_id.load(ctx, repo.blobstore()).await?;
            let content_id = filenode.content_id();
            let val = ManifestData::Hg(ty, content_id);
            Ok((path, val))
        })
        .try_buffer_unordered(100)
        .try_collect()
        .await?;
    info!(ctx.logger(), "Loaded hg manifests for {} paths", map.len());
    Ok((ManifestType::Hg, map))
}

async fn list_skeleton_manifest(
    ctx: &CoreContext,
    repo: &BlobRepo,
    cs_id: ChangesetId,
    fetch_derived: bool,
) -> Result<(ManifestType, HashMap<MPath, ManifestData>), Error> {
    let root_skeleton_id =
        derive_or_fetch::<RootSkeletonManifestId>(ctx, repo, cs_id, fetch_derived).await?;

    let skeleton_id = root_skeleton_id.skeleton_manifest_id();
    let map: HashMap<_, _> = skeleton_id
        .list_leaf_entries(ctx.clone(), repo.get_blobstore())
        .map_ok(|(path, ())| (path, ManifestData::Skeleton))
        .try_collect()
        .await?;
    info!(
        ctx.logger(),
        "Loaded skeleton manifests for {} paths",
        map.len()
    );
    Ok((ManifestType::Skeleton, map))
}

async fn list_fsnodes(
    ctx: &CoreContext,
    repo: &BlobRepo,
    cs_id: ChangesetId,
    fetch_derived: bool,
) -> Result<(ManifestType, HashMap<MPath, ManifestData>), Error> {
    let root_fsnode_id = derive_or_fetch::<RootFsnodeId>(ctx, repo, cs_id, fetch_derived).await?;

    let fsnode_id = root_fsnode_id.fsnode_id();
    let map: HashMap<_, _> = fsnode_id
        .list_leaf_entries(ctx.clone(), repo.get_blobstore())
        .map_ok(|(path, fsnode)| {
            let (content_id, ty): (ContentId, FileType) = fsnode.into();
            let val = ManifestData::Fsnodes(ty, content_id);
            (path, val)
        })
        .try_collect()
        .await?;
    info!(ctx.logger(), "Loaded fsnodes for {} paths", map.len());
    Ok((ManifestType::Fsnodes, map))
}

async fn list_unodes(
    ctx: &CoreContext,
    repo: &BlobRepo,
    cs_id: ChangesetId,
    fetch_derived: bool,
) -> Result<(ManifestType, HashMap<MPath, ManifestData>), Error> {
    let root_unode_id =
        derive_or_fetch::<RootUnodeManifestId>(ctx, repo, cs_id, fetch_derived).await?;

    let unode_id = root_unode_id.manifest_unode_id();
    let map: HashMap<_, _> = unode_id
        .list_leaf_entries(ctx.clone(), repo.get_blobstore())
        .map_ok(|(path, unode_id)| async move {
            let unode = unode_id.load(ctx, repo.blobstore()).await?;
            let val = ManifestData::Unodes(*unode.file_type(), *unode.content_id());
            Ok((path, val))
        })
        .try_buffer_unordered(100)
        .try_collect()
        .await?;
    info!(ctx.logger(), "Loaded unodes for {} paths", map.len());
    Ok((ManifestType::Unodes, map))
}
