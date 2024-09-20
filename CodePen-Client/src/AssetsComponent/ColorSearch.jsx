import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#000000");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="w-full p-4 bg-white">
      <h1 className="text-xl font-bold mb-4 text-black">Color Picker</h1>
      <div
        className="w-full h-[200px] mb-4"
        style={{ backgroundColor: color }}
      ></div>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-full h-[40px] border-none cursor-pointer"
      />
      <p className="mt-2 text-center text-gray-700">
        Click to pick a color: <span>{color}</span>
      </p>
    </div>
  );
};

export default ColorPicker;
