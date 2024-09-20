import React, { useCallback, useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import CodeMirror from "@uiw/react-codemirror";
import { IoMdSettings } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import EditorSetting from "../EditorSettings/EditorSetting";

export default function LeftLayout() {
  const [htmlEdit, setHtmlEdit] = useState("");
  const [cssEdit, setCssEdit] = useState("");
  const [jsEdit, setJsEdit] = useState("");

  const [isHtmlDropdownOpen, setHtmlDropdownOpen] = useState(false);
  const [isCssDropdownOpen, setCssDropdownOpen] = useState(false);
  const [isJsDropdownOpen, setJsDropdownOpen] = useState(false);

  const [isHtmlSettingsOpen, setHtmlSettingsOpen] = useState(false);
  const [isCssSettingsOpen, setCssSettingsOpen] = useState(false);
  const [isJsSettingsOpen, setJsSettingsOpen] = useState(false);

  const handleHtmlChange = useCallback((value) => setHtmlEdit(value), []);
  const handleCssChange = useCallback((value) => setCssEdit(value), []);
  const handleJsChange = useCallback((value) => setJsEdit(value), []);

  const editorConfig = {
    height: "calc(100% - 40px)",
    theme: "dark",
    className: "text-xl border-gray-700 border",
  };

  const dropdownStyle =
    "absolute bg-white text-black rounded shadow-lg mt-2 w-[220px] top-[15%] right-2 z-50";

  const srcCode = `
    <html>
      <body>${htmlEdit}</body>
      <style>${cssEdit}</style>
      <script>${jsEdit}</script>
    </html>
  `;

  const toggleHtmlDropdown = () => setHtmlDropdownOpen(!isHtmlDropdownOpen);
  const toggleCssDropdown = () => setCssDropdownOpen(!isCssDropdownOpen);
  const toggleJsDropdown = () => setJsDropdownOpen(!isJsDropdownOpen);

  const toggleHtmlSettings = () => setHtmlSettingsOpen(!isHtmlSettingsOpen);
  const toggleCssSettings = () => setCssSettingsOpen(!isCssSettingsOpen);
  const toggleJsSettings = () => setJsSettingsOpen(!isJsSettingsOpen);

  const dropdownHtmlOptions = [
    "Format HTML",
    "Analyze HTML",
    "Maximize HTML Editor",
    "Minimize HTML Editor",
    "Fold All",
    "Unfold All",
  ];
  const dropdownCssOptions = [
    "Format CSS",
    "Analyze CSS",
    "Maximize CSS Editor",
    "Minimize CSS Editor",
    "Fold All",
    "Unfold All",
  ];
  const dropdownJsOptions = [
    "Format JavaScript",
    "Analyze JavaScript",
    "Maximize JavaScript Editor",
    "Minimize JavaScript Editor",
    "Fold All",
    "Unfold All",
  ];

  return (
    <div className="flex gap-2 mt-[65px] px-2 py-2">
      <div className="flex flex-col h-[750px] w-[500px] gap-1">
        {/* HTML Editor */}
        <div className="relative h-[240px] w-full bg-[#282c34] rounded-lg shadow">
          <div className="flex px-2 justify-between items-center bg-[#282c34] text-white p-2 rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 bg-red-600 flex items-center justify-center rounded-md">
                <img src="/HTML.png" className="h-4 w-4" alt="HTML Icon" />
              </div>
              <h2 className="text-lg font-semibold">HTML</h2>
            </div>
            <div className="flex items-center text-white gap-2 text-xs leading-3">
              <button
                className="bg-[#5a5f72] h-[24px] w-[24px] rounded-md flex items-center justify-center"
                onClick={toggleHtmlSettings}
              >
                <IoMdSettings className="text-base" />
              </button>
              <button
                className="bg-[#5a5f72] h-[24px] w-[24px] rounded-md flex items-center justify-center"
                onClick={toggleHtmlDropdown}
              >
                <RiArrowDropDownLine className="text-2xl" />
              </button>
            </div>
          </div>
          {isHtmlDropdownOpen && (
            <div className={dropdownStyle}>
              {dropdownHtmlOptions.map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 hover:bg-[#e7e8f1] cursor-pointer"
                  onClick={() => {
                    console.log("Selected option for HTML:", option);
                    setHtmlDropdownOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
          <CodeMirror
            value={htmlEdit}
            onChange={handleHtmlChange}
            extensions={[html()]}
            {...editorConfig}
          />
        </div>

        {/* CSS Editor */}
        <div className="relative h-[240px] w-full bg-[#282c34] rounded-lg shadow">
          <div className="flex px-2 justify-between items-center bg-[#282c34] text-white p-2 rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 bg-blue-400 flex items-center justify-center rounded-md">
                <img src="/CSS.png" className="h-4 w-4" alt="CSS Icon" />
              </div>
              <h2 className="text-lg font-semibold">CSS</h2>
            </div>
            <div className="flex items-center text-white gap-2 text-xs leading-3">
              <button
                className="bg-[#5a5f72] h-[24px] w-[24px] rounded-md flex items-center justify-center"
                onClick={toggleCssSettings}
              >
                <IoMdSettings className="text-base" />
              </button>
              <button
                className="bg-[#5a5f72] h-[24px] w-[24px] rounded-md flex items-center justify-center"
                onClick={toggleCssDropdown}
              >
                <RiArrowDropDownLine className="text-2xl" />
              </button>
            </div>
          </div>
          {isCssDropdownOpen && (
            <div className={dropdownStyle}>
              {dropdownCssOptions.map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 hover:bg-[#e7e8f1] cursor-pointer"
                  onClick={() => {
                    console.log("Selected option for CSS:", option);
                    setCssDropdownOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
          <CodeMirror
            value={cssEdit}
            onChange={handleCssChange}
            extensions={[css()]}
            {...editorConfig}
          />
        </div>

        {/* JavaScript Editor */}
        <div className="relative h-[240px] w-full bg-[#282c34] rounded-lg shadow">
          <div className="flex px-2 justify-between items-center bg-[#282c34] text-white p-2 rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 bg-yellow-400 flex items-center justify-center rounded-md">
                <img src="/JS.png" className="h-4 w-4" alt="JS Icon" />
              </div>
              <h2 className="text-lg font-semibold">JavaScript</h2>
            </div>
            <div className="flex items-center text-white gap-2 text-xs leading-3">
              <button
                className="bg-[#5a5f72] h-[24px] w-[24px] rounded-md flex items-center justify-center"
                onClick={toggleJsSettings}
              >
                <IoMdSettings className="text-base" />
              </button>
              <button
                className="bg-[#5a5f72] h-[24px] w-[24px] rounded-md flex items-center justify-center"
                onClick={toggleJsDropdown}
              >
                <RiArrowDropDownLine className="text-2xl" />
              </button>
            </div>
          </div>
          {isJsDropdownOpen && (
            <div className={dropdownStyle}>
              {dropdownJsOptions.map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 hover:bg-[#e7e8f1] cursor-pointer"
                  onClick={() => {
                    console.log("Selected option for JavaScript:", option);
                    setJsDropdownOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
          <CodeMirror
            value={jsEdit}
            onChange={handleJsChange}
            extensions={[javascript()]}
            {...editorConfig}
          />
        </div>
      </div>

      {/* Output Section */}
      <div className="h-[655px] flex-1">
        <div className="bg-[#282c34] p-4 mb-6 shadow">
          <h2 className="text-lg font-semibold mb-2 text-white">Output</h2>
          <iframe
            className="w-full h-[655px] border border-gray-700 rounded-md bg-white"
            srcDoc={srcCode}
            title="output"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>

      {/* Render Settings Modals */}
      {isHtmlSettingsOpen && (
        <EditorSetting onClose={toggleHtmlSettings} editorType="HTML" />
      )}
      {isCssSettingsOpen && (
        <EditorSetting onClose={toggleCssSettings} editorType="CSS" />
      )}
      {isJsSettingsOpen && (
        <EditorSetting onClose={toggleJsSettings} editorType="JavaScript" />
      )}
    </div>
  );
}
