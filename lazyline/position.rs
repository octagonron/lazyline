// In Tauri Rust code
#[command]
fn set_window_always_on_top(state: State<AppState>) -> Result<(), String> {
  let window = state.window.clone();
  window.set_always_on_top(true).map_err(|e| e.to_string())
}