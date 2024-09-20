import React from "react";

export default function PenSettings() {
  const boxStyle =
    "bg-gradient-to-r from-[#71779085] to-[#1314173b] pl-4 py-2 border-l-[3px] border-[#717790] mb-2";
  const headerStyle = "font-bold text-[15px] leading-[18px] text-white pb-2";
  return (
    <div>
      <div className={`${boxStyle} h-[90px]`}>
        <p className={headerStyle}>Pen Title</p>
        <div className="relative">
          <input
            type="text"
            id="indentWidth"
            placeholder="Untitled"
            className="w-full pr-10 pl-3 py-2 text-[#333] bg-[#e1e1e1] rounded focus:outline-none focus:ring-2 focus:ring-[#717790] focus:border-transparent"
          />
        </div>
      </div>
      <div className={`${boxStyle} h-[157.7px]`}>
        <p className={headerStyle}>Pen Description</p>
        <div className="relative">
          <textarea
            placeholder="Explain what’s going on in your Pen here. This text is searchable, so it can also help others find your work. Remember to credit others where credit is due. Markdown supported."
            className="w-full h-[100px] pr-10 pl-3 py-2 text-[#333] bg-[#e1e1e1] rounded focus:outline-none focus:ring-2 focus:ring-[#717790] focus:border-transparent placeholder:text-sm placeholder:text-[#999]"
          />
        </div>
      </div>
      <div className={`${boxStyle} h-[90px]`}>
        <div className="flex justify-between">
          <div className={{headerStyle} }>Tags</div>
          <div className="text-[10px] pb-0">comma separated, max of five</div>
        </div>
        <div className="relative">
          <input
            type="text"
            className="w-full pr-10 pl-3 py-2 text-[#333] bg-[#e1e1e1] rounded focus:outline-none focus:ring-2 focus:ring-[#717790] focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}
