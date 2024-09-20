import React, { useState, useEffect } from "react";
import ScreenshotSetting from "./EditorSettingsComponents/ScreenshotSetting";
import TemplateSettings from "./EditorSettingsComponents/TemplateSettings";
import EditorSettings from "./EditorSettingsComponents/EditorSettings";
import BehaviourSettings from "./EditorSettingsComponents/BehaviourSetting";
import PrivacySetting from "./EditorSettingsComponents/PrivacySetting";
import PenSettings from "./EditorSettingsComponents/PenSettings";
import HtmlSettings from "./EditorSettingsComponents/HtmlSettings.jsx";
import CssSettings from "./EditorSettingsComponents/CssSettings.jsx";
import JsSettings from "./EditorSettingsComponents/JsSettings";

export default function EditorSetting({ onClose, editorType }) {
  const [activeTab, setActiveTab] = useState("Pen Details");

  // Set the active tab based on the editorType prop
  useEffect(() => {
    if (editorType === "HTML") setActiveTab("HTML");
    else if (editorType === "CSS") setActiveTab("CSS");
    else if (editorType === "JavaScript") setActiveTab("JS");
    else setActiveTab("Pen Details"); // Default case
  }, [editorType]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 mt-0 transition-opacity duration-300 opacity-100">
      <div className="relative border-[2px] border-[#262830] bg-[#000000] rounded-md shadow-lg w-[700px] h-[556px] p-1 px-2">
        <div className="flex items-center justify-between p-2 border-b-[2px] border-[#252830]">
          <h2 className="text-lg font-semibold text-white">Pen Settings</h2>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-[#5a5f73] text-white text-center h-6 w-6"
          >
            &#x2715;
          </button>
        </div>
        <div className="flex gap-3 text-white">
          <div className="h-full w-auto">
            <div className="mb-4">
              <ul className="list-none text-sm leading-4 ">
                {["HTML", "CSS", "JS"].map((tab) => (
                  <li
                    key={tab}
                    className={`p-2 flex items-center space-x-2 border-l-4 cursor-pointer transition-all duration-300 group text-[#white] font-bold ${
                      activeTab === tab
                        ? "border-l-green-600 text-white font-bold bg-[#2c303a]"
                        : "border-transparent hover:bg-[#2c303a]"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <span className="text-sm leading-4">{tab}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex">
              <ul className="flex flex-col">
                {[
                  "Pen Details",
                  "Privacy",
                  "Behaviour",
                  "Editor",
                  "Template",
                  "ScreenShot",
                ].map((tab) => (
                  <li
                    key={tab}
                    className={`pl-2 py-[6px] flex items-center space-x-2 border-l-4 cursor-pointer transition-all duration-300 group text-[#white] font-bold ${
                      activeTab === tab
                        ? "border-l-green-600 text-white bg-[#2c303a] font-semibold"
                        : "border-transparent hover:bg-[#2c303a] hover:text-white"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    <span className="text-sm leading-4">{tab}</span>
                    {(tab === "Privacy" || tab === "ScreenShot") && (
                      <span className="text-[10.65px] bg-[#ffdd40] p-2 text-center h-[11px] w-auto flex items-center text-black font-extralight">
                        Pro
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 max-h-[550px] w-full overflow-y-auto p-4">
            <div>
              {activeTab === "HTML" && <HtmlSettings />}
              {activeTab === "CSS" && <CssSettings />}
              {activeTab === "JS" && <JsSettings />}
              {activeTab === "Pen Details" && <PenSettings />}
              {activeTab === "Privacy" && <PrivacySetting />}
              {activeTab === "Behaviour" && <BehaviourSettings />}
              {activeTab === "Editor" && <EditorSettings />}
              {activeTab === "Template" && <TemplateSettings />}
              {activeTab === "ScreenShot" && <ScreenshotSetting />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
