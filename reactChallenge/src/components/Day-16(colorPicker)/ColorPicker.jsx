import { useState } from "react";

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <input type="color" value={selectedColor} onChange={handleColorChange} />
      <p>Selected Color: {selectedColor}</p>
      <input type="color" />
    </div>
  );
}

export default ColorPicker;
