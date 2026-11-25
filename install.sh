#!/usr/bin/env bash
# SadSha Slate macOS installer
#
# Downloads the latest release and installs it to /Applications, bypassing
# the Gatekeeper "app is damaged" false alarm that macOS shows for
# browser-downloaded unsigned apps (terminal downloads aren't quarantined).
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/fnjlabs-arch/slate/main/install.sh | bash
set -euo pipefail

REPO="fnjlabs-arch/slate"
ASSET="SadSha-Slate-macOS.zip"

DEST="/Applications"
if [ ! -w "$DEST" ]; then
  DEST="$HOME/Applications"
  mkdir -p "$DEST"
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "Downloading the latest SadSha Slate (Apple Silicon)..."
curl -fL --progress-bar "https://github.com/$REPO/releases/latest/download/$ASSET" -o "$TMP/$ASSET"

echo "Installing to $DEST..."
rm -rf "$DEST/SadSha Slate.app"
ditto -x -k "$TMP/$ASSET" "$DEST"
xattr -cr "$DEST/SadSha Slate.app" 2>/dev/null || true

echo "✓ SadSha Slate installed — launching."
open "$DEST/SadSha Slate.app"
