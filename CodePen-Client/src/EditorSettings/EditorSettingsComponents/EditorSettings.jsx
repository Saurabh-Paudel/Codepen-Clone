import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function EditorSettings() {
  const [indentWidth, setIndentWidth] = useState(2);

  const boxStyle =
    "bg-gradient-to-r from-[#71779085] to-[#1314173b] pl-4 py-2 border-l-[3px] border-[#717790] mb-2";
  const headerStyle = "font-bold text-[15px] leading-[18px] text-white pb-2";

  const handleIncrement = () => {
    setIndentWidth((prev) => Math.max(1, prev + 1));
  };

  const handleDecrement = () => {
    setIndentWidth((prev) => Math.max(1, prev - 1));
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setIndentWidth(value ? parseInt(value, 10) : "");
    }
  };

  return (
    <div className="p-0">
      <div className={`${boxStyle} h-[100px]`}>
        <p className={headerStyle}>Code Indentation</p>
        <div className="text-[#bebebe] text-[15px] font-semibold space-y-2">
          <div>
            <input
              type="radio"
              name="indentation"
              id="spaces"
              className="mr-2"
            />
            <label htmlFor="spaces">Spaces</label>
          </div>
          <div>
            <input type="radio" name="indentation" id="tabs" className="mr-2" />
            <label htmlFor="tabs">Tabs</label>
          </div>
        </div>
      </div>
      <div className={`${boxStyle} h-[94px]`}>
        <p className={headerStyle}>Code Indent Width</p>
        <div className="relative">
          <input
            type="text"
            id="indentWidth"
            value={indentWidth}
            onChange={handleChange}
            className="w-full pr-10 pl-3 py-2 text-[#333] bg-[#e1e1e1] rounded focus:outline-none focus:ring-2 focus:ring-[#717790] focus:border-transparent"
          />
          <div className="absolute inset-y-0 right-0 flex flex-col justify-center">
            <button
              type="button"
              onClick={handleIncrement}
              className="h-[50%] flex items-center justify-center bg-transparent px-2 border-b border-[#ccc] text-black"
              aria-label="Increase indent width"
            >
              <IoIosArrowUp />
            </button>
            <button
              type="button"
              onClick={handleDecrement}
              className="h-[50%] flex items-center justify-center bg-transparent px-2  text-black"
              aria-label="Decrease indent width"
            >
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div className={`${boxStyle} h-[73px]`}>
        <p className={headerStyle}>
          Want to change your Syntax Highlighting theme, Fonts and more?
        </p>
        <p>
          Visit{" "}
          <span className="text-blue-400 underline cursor-pointer">
            your global Editor Settings
          </span>
          .
        </p>
      </div>
    </div>
  );
}
