import React, { useState } from "react";

const boxStyle =
  "bg-gradient-to-r from-[#71779085] to-[#1314173b] p-4 border-l-[3px] border-[#717790] mb-2";

const titleStyle = "font-bold text-[15px] leading-[18px] text-white pb-3";

const descriptionStyle = "text-[#bebebe] text-[14px] font-[500]";

export default function BehaviourSetting() {
  // State for each toggle
  const [autoSave, setAutoSave] = useState(false);
  const [autoUpdatingPreview, setAutoUpdatingPreview] = useState(false);
  const [formatOnSave, setFormatOnSave] = useState(false);

  const handleToggle = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <>
      <div className={`${boxStyle} h-[110px]`}>
        <p className={titleStyle}>Auto Save</p>
        <p className={descriptionStyle}>
          If active, Pens will autosave every 30 seconds after being saved once.
        </p>
        <div className="flex items-center py-3">
          <div
            onClick={() => handleToggle(setAutoSave)}
            className={`w-[52px] h-[27px] flex items-center rounded-full cursor-pointer ${
              autoSave ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-7 h-7 rounded-full shadow-md transform ${
                autoSave ? "translate-x-6 pr-2" : ""
              } transition-transform`}
            />
          </div>
          <span className="ml-3 text-white">{autoSave ? "On" : "Off"}</span>
        </div>
      </div>

      <div className={`${boxStyle} h-[132px]`}>
        <p className={titleStyle}>Auto-Updating Preview</p>
        <p className={descriptionStyle}>
          If enabled, the preview panel updates automatically as you code. If
          disabled, use the "Run" button to update.
        </p>
        <div className="flex items-center py-3">
          <div
            onClick={() => handleToggle(setAutoUpdatingPreview)}
            className={`w-[52px] h-[27px] flex items-center rounded-full cursor-pointer ${
              autoUpdatingPreview ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-7 h-7 rounded-full shadow-md transform ${
                autoUpdatingPreview ? "translate-x-6 pr-2" : ""
              } transition-transform`}
            />
          </div>
          <span className="ml-3 text-white">
            {autoUpdatingPreview ? "On" : "Off"}
          </span>
        </div>
      </div>

      <div className={`${boxStyle} h-[132px]`}>
        <p className={titleStyle}>Format on Save</p>
        <p className={descriptionStyle}>
          If enabled, your code will be formatted when you actively save your
          Pen. Note: your code becomes un-folded during formatting.
        </p>
        <div className="flex items-center py-3">
          <div
            onClick={() => handleToggle(setFormatOnSave)}
            className={`w-[52px] h-[27px] flex items-center rounded-full cursor-pointer ${
              formatOnSave ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-7 h-7 rounded-full shadow-md transform ${
                formatOnSave ? "translate-x-6 pr-2" : ""
              } transition-transform`}
            />
          </div>
          <span className="ml-3 text-white">{formatOnSave ? "On" : "Off"}</span>
        </div>
      </div>
    </>
  );
}
