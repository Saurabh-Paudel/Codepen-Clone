import React from "react";
import { FaLink, FaRegFileAlt } from "react-icons/fa";

const FONT_LIST = [
  { name: "Roboto", family: "'Roboto', sans-serif" },
  { name: "Open Sans", family: "'Open Sans', sans-serif" },
  { name: "Lato", family: "'Lato', sans-serif" },
  { name: "Montserrat", family: "'Montserrat', sans-serif" },
  { name: "Oswald", family: "'Oswald', sans-serif" },
  { name: "Raleway", family: "'Raleway', sans-serif" },
  { name: "Poppins", family: "'Poppins', sans-serif" },
  { name: "Ubuntu", family: "'Ubuntu', sans-serif" },
];

export default function FontSearch() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  const generateLink = (fontName) =>
    `<link href="https://fonts.googleapis.com/css2?family=${fontName.replace(
      / /g,
      "+"
    )}&display=swap" rel="stylesheet">`;

  const generateImport = (fontFamily) =>
    `@import url('https://fonts.googleapis.com/css2?family=${fontFamily.replace(
      / /g,
      "+"
    )}&display=swap');`;

  return (
    <div className="w-full p-4">
      <div className="bg-[#1e1f26] p-4 rounded-lg shadow-lg">
        <div className="text-white mb-4">
          Popular Google Fonts. Click to Copy.
        </div>
        <div className="flex flex-wrap gap-4">
          {FONT_LIST.map((font) => (
            <div
              key={font.name}
              className="flex items-center justify-between bg-[#2c303a] p-4 rounded-lg w-[600px] h-[60px] mb-2"
            >
              <div className="flex-1">
                <span
                  style={{ fontFamily: font.family }}
                  className="text-white"
                >
                  {font.name}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCopy(generateLink(font.name))}
                  className="bg-[#717790] text-white text-xs font-medium rounded-md h-[30px] w-[30px] flex items-center justify-center hover:bg-[#5a5f73]"
                >
                  <FaLink />
                </button>
                <button
                  onClick={() => handleCopy(generateImport(font.family))}
                  className="bg-[#717790] text-white text-xs font-medium rounded-md h-[30px] w-[30px] flex items-center justify-center hover:bg-[#5a5f73]"
                >
                  <FaRegFileAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
