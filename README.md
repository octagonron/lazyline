Here's the **markdownlint-compliant README** with all issues resolved:

```markdown
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
```

### Quick Start

1. Clone repository

```bash
git clone https://github.com/yourusername/lazyline-cli.git
cd lazyline-cli
```

2. Install dependencies

```bash
npm install
cargo tauri install
```

3. Run in development mode

```bash
npm run tauri dev
```

## 🕹️ Usage

### CLI Mode

```text
> [Type commands here]
------------------
[Output appears here]
```

### Keybind Mode (Flip to configure)

```text
┌─────────────┬─────────────┐
│ Ctrl+Shift+G│ git status  │
│ Ctrl+Alt+L  │ lazygit     │
│ ...         │ ...         │
└─────────────┴─────────────┘
```

## ⚙️ Configuration

**Config files stored in:**

- **Linux:** `~/.config/lazyline/`
- **macOS:** `~/Library/Application Support/lazyline/`
- **Windows:** `%APPDATA%\lazyline\`

**File structure:**

```text
config.json
  ├── window_position
  ├── window_size
  └── keybinds.json
```

## 🛠️ Development

### Tech Stack

- **Core:** Tauri (Rust)
- **UI:** React + TypeScript
- **Styling:** Tailwind CSS
- **State:** Zustand
- **Window Control:** React-RND

### Key Commands

```bash
# Build production app
npm run tauri build

# Run linter
npm run lint

# Format code
npm run format
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feat/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feat/amazing-feature`)
5. Open Pull Request

## ⚠️ Safety First

LazyLine uses a command allowlist system:

```rust
// Only these base commands are permitted by default
const ALLOWED_COMMANDS: &[&str] = &[
    "git", "echo", "ls", 
    "pwd", "npm", "cargo"
];
```

Edit `src-tauri/src/commands.rs` to modify permissions.

## 📜 License

MIT © [Your Name]
```
