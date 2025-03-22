type Keybind = {
  key: string;        // e.g. "Ctrl+Shift+K"
  action: string;     // CLI command or macro
  description: string;
}

const [keybinds, setKeybinds] = useState<Keybind[]>(Array(6).fill({
  key: "",
  action: "",
  description: ""
}));