// Copyright 2018 Facebook, Inc.
//
// This software may be used and distributed according to the terms of the
// GNU General Public License version 2 or any later version.

use std::{collections::HashMap, ops::Deref, path::PathBuf};

use failure::Fallible;

use types::{HistoryEntry, Key, NodeInfo};

use crate::localstore::LocalStore;

pub type Ancestors = HashMap<Key, NodeInfo>;

pub trait HistoryStore: LocalStore {
    fn get_ancestors(&self, key: &Key) -> Fallible<Ancestors>;
    fn get_node_info(&self, key: &Key) -> Fallible<NodeInfo>;
}

pub trait MutableHistoryStore {
    fn add(&mut self, key: &Key, info: &NodeInfo) -> Fallible<()>;
    fn close(self) -> Fallible<PathBuf>;

    fn add_entry(&mut self, entry: &HistoryEntry) -> Fallible<()> {
        self.add(&entry.key, &entry.nodeinfo)
    }

    fn add_entries(&mut self, entries: impl IntoIterator<Item = HistoryEntry>) -> Fallible<()> {
        for entry in entries {
            self.add(&entry.key, &entry.nodeinfo)?;
        }
        Ok(())
    }
}

/// Implement `HistoryStore` for all types that can be `Deref` into a `HistoryStore`.
impl<T: HistoryStore, U: Deref<Target = T>> HistoryStore for U {
    fn get_ancestors(&self, key: &Key) -> Fallible<Ancestors> {
        T::get_ancestors(self, key)
    }
    fn get_node_info(&self, key: &Key) -> Fallible<NodeInfo> {
        T::get_node_info(self, key)
    }
}
