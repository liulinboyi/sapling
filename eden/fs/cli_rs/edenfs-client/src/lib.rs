/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This software may be used and distributed according to the terms of the
 * GNU General Public License version 2.
 */

use std::sync::Arc;

#[cfg(fbcode_build)]
use thrift_streaming::client::StreamingEdenService;
use thrift_types::edenfs::client::EdenService;

pub mod checkout;
pub mod instance;
mod mounttable;
pub mod redirect;

pub use instance::DaemonHealthy;
pub use instance::EdenFsInstance;

pub type EdenFsClient = Arc<dyn EdenService + Sync>;

#[cfg(fbcode_build)]
pub type StreamingEdenFsClient = Arc<dyn StreamingEdenService + Sync>;
