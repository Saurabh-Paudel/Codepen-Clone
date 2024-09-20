import React from "react";

export default function Footer({
  openModel,
  onConsoleToggle,
  openAssetsToggle,
}) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#282c34] text-white px-4 py-1 z-50">
      <div className="flex items-center gap-1">
        <button
          onClick={onConsoleToggle}
          className="text-xs leading-[14.4px] bg-[#5a5f73] h-[22px] w-[58.4125px] rounded-sm"
          aria-label="Toggle Console"
        >
          Console
        </button>
        <button
          onClick={openAssetsToggle}
          className="text-xs leading-[14.4px] bg-[#5a5f73] h-[22px] w-[50.15px] rounded-sm"
          aria-label="Open Assets"
        >
          Assets
        </button>
        <button
          onClick={openModel}
          className="text-xs leading-[14.4px] bg-[#5a5f73] h-[22px] w-[68.4625px] rounded-sm"
          aria-label="Open Shortcuts"
        >
          Shortcuts
        </button>
      </div>
    </div>
  );
}
