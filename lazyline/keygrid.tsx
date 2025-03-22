<div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
  {keybinds.map((bind, index) => (
    <div key={index} className="keybind-slot">
      <input 
        type="text" 
        value={bind.key}
        onChange={(e) => updateKeybind(index, "key", e.target.value)}
        placeholder="Key combo"
      />
      <input
        type="text"
        value={bind.action}
        onChange={(e) => updateKeybind(index, "action", e.target.value)}
        placeholder="system_command --flag"
      />
    </div>
  ))}
</div>