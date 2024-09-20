import React, { useCallback, useState, useMemo } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import CodeMirror from "@uiw/react-codemirror";
import { IoMdSettings } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import EditorSetting from "../EditorSettings/EditorSetting"; // Adjust the import path if necessary

const Editor = ({
  title,
  iconSrc,
  value,
  onChange,
  extensions,
  isDropdownOpen,
  toggleDropdown,
  dropdownOptions,
  isSettingsOpen,
  toggleSettings,
}) => (
  <div className="relative bg-[#282c34] p-4 rounded-lg shadow">
    <div className="flex px-2 justify-between pb-1">
      <div className="flex items-center gap-2">
        <div
          className={`h-5 w-5 flex items-center justify-center rounded-md ${iconSrc.bgColor}`}
        >
          <img src={iconSrc.src} className="h-4 w-4" alt={`${title} Icon`} />
        </div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      <div className="flex items-center text-white gap-2 text-xs leading-3">
        <button
          className="bg-[#5a5f72] h-[24px] w-[24px] rounded-md flex items-center justify-center"
          onClick={toggleSettings}
          aria-label={`Toggle ${title} settings`}
        >
          <IoMdSettings className="text-base text-white" />
        </button>
        <button
          onClick={toggleDropdown}
          className="bg-[#5a5f72] h-[24px] w-[24px] rounded-md flex items-center justify-center"
          aria-label={`Toggle ${title} dropdown`}
        >
          <RiArrowDropDownLine className="text-2xl text-white" />
        </button>
      </div>
    </div>
    {isDropdownOpen && (
      <div className="absolute bg-white text-black rounded shadow-lg mt-2 w-[220px] top-[10%] right-5 z-50">
        {dropdownOptions.map((option) => (
          <div
            key={option}
            className="px-4 py-2 hover:bg-[#e7e8f1] cursor-pointer"
            onClick={() => {
              toggleDropdown();
            }}
          >
            {option}
          </div>
        ))}
      </div>
    )}
    <CodeMirror
      value={value}
      onChange={onChange}
      extensions={extensions}
      height="342px"
      theme="dark"
      className="text-xl border-gray-700 border"
    />
  </div>
);

export default function DefaultLayout() {
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

  const srcCode = useMemo(
    () => `
    <html>
      <body>${htmlEdit}</body>
      <style>${cssEdit}</style>
      <script>${jsEdit}</script>
    </html>
  `,
    [htmlEdit, cssEdit, jsEdit]
  );

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
    <div className="px-4 py-2 bg-[#010101] mt-[65px]">
      {/* Editor grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <Editor
          title="HTML"
          iconSrc={{ src: "/HTML.png", bgColor: "bg-red-600" }}
          value={htmlEdit}
          onChange={handleHtmlChange}
          extensions={[html()]}
          isDropdownOpen={isHtmlDropdownOpen}
          toggleDropdown={() => setHtmlDropdownOpen(!isHtmlDropdownOpen)}
          dropdownOptions={dropdownHtmlOptions}
          isSettingsOpen={isHtmlSettingsOpen}
          toggleSettings={() => setHtmlSettingsOpen(!isHtmlSettingsOpen)}
        />
        <Editor
          title="CSS"
          iconSrc={{ src: "/CSS.png", bgColor: "bg-blue-400" }}
          value={cssEdit}
          onChange={handleCssChange}
          extensions={[css()]}
          isDropdownOpen={isCssDropdownOpen}
          toggleDropdown={() => setCssDropdownOpen(!isCssDropdownOpen)}
          dropdownOptions={dropdownCssOptions}
          isSettingsOpen={isCssSettingsOpen}
          toggleSettings={() => setCssSettingsOpen(!isCssSettingsOpen)}
        />
        <Editor
          title="JavaScript"
          iconSrc={{ src: "/JS.png", bgColor: "bg-yellow-400" }}
          value={jsEdit}
          onChange={handleJsChange}
          extensions={[javascript()]}
          isDropdownOpen={isJsDropdownOpen}
          toggleDropdown={() => setJsDropdownOpen(!isJsDropdownOpen)}
          dropdownOptions={dropdownJsOptions}
          isSettingsOpen={isJsSettingsOpen}
          toggleSettings={() => setJsSettingsOpen(!isJsSettingsOpen)}
        />
      </div>
      <div className="mt-2">
        <div className="bg-[#282c34] p-4 mb-6 shadow">
          <h2 className="text-lg font-semibold mb-2 text-white">Output</h2>
          <iframe
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] border border-gray-700 rounded-md bg-white"
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
        <EditorSetting
          onClose={() => setHtmlSettingsOpen(!isHtmlSettingsOpen)}
          editorType="HTML"
        />
      )}
      {isCssSettingsOpen && (
        <EditorSetting
          onClose={() => setCssSettingsOpen(!isCssSettingsOpen)}
          editorType="CSS"
        />
      )}
      {isJsSettingsOpen && (
        <EditorSetting
          onClose={() => setJsSettingsOpen(!isJsSettingsOpen)}
          editorType="JavaScript"
        />
      )}
    </div>
  );
}
