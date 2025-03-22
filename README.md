# LazyLine CLI

![License](https://img.shields.io/badge/license-MIT-blue) ![Platform](https://img.shields.io/badge/platform-win|macos|linux-lightgrey)

A modern, flippable CLI widget with keybind management that stays on top of your workflow. Literally.

<!-- Add demo GIF later -->
<!-- ![LazyLine Demo](docs/demo.gif) -->

## ✨ Features

- **Dual Interface Design**
  - 🖥️ CLI mode for command execution
  - 🎹 Keybind mode for managing 6 custom shortcuts

- **Desktop-First Experience**
  - Always-on-top window
  - Drag anywhere to reposition
  - Resize to fit your needs

- **Instant Flip Transition**
  - Smooth 3D flip animation between modes
  - Triggered by clicking the crown logo

- **Persistent Configuration**
  - Remembers position, size, and keybinds
  - Automatic save on flip

- **Secure Execution**
  - Command validation system
  - Allowlist for safe operations

## 🚀 Installation

### Prerequisites

- Node.js v18+
- Rust (via [rustup](https://rustup.rs/))

**System dependencies:**

```bash
# Ubuntu/Debian
sudo apt install libwebkit2gtk-4.0-dev build-essential curl wget libssl-dev libgtk-3-dev

# macOS
brew install openssl
