// Store in ~/.lazyline/keybinds.json
#[command]
fn save_keybinds(keybinds: Vec<Keybind>) -> Result<(), String> {
  let config_dir = dirs::config_dir()
    .ok_or("No config dir")?
    .join("lazyline");
  
  fs::create_dir_all(&config_dir)
    .map_err(|e| e.to_string())?;
  
  let path = config_dir.join("keybinds.json");
  let json = serde_json::to_string(&keybinds)
    .map_err(|e| e.to_string())?;
  
  fs::write(path, json)
    .map_err(|e| e.to_string())
}