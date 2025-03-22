```markdown
## 🚀 Installation

### Prerequisites

1. **System Dependencies** (Run these first):
```bash
sudo apt update && sudo apt install -y \
    libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

2. **Rust Toolchain**:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
source $HOME/.cargo/env
```

### Project Setup
```bash
# 1. Clone and enter repo
git clone https://github.com/yourusername/lazyline-cli.git
cd lazyline-cli

# 2. Initialize Node project
npm init -y

# 3. Install Tauri CLI
npm install @tauri-apps/cli --save-dev

# 4. Initialize Tauri core
npx tauri init

# 5. Install remaining dependencies
npm install

# 6. Start development
npm run tauri dev
```

### First Run Configuration
When prompted during `npx tauri init`:
- Set app name: `LazyLine`
- Window title: `LazyLine CLI`
- Frontend dev path: `http://localhost:3000`
- Frontend build command: `npm run build`
```

