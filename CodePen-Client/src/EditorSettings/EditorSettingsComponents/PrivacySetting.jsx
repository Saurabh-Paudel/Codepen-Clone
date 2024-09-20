import React from "react";

export default function PrivacySetting() {
  const boxStyle =
    "bg-gradient-to-r from-[#71779085] to-[#1314173b] p-4 border-l-[3px] border-[#717790] mb-2";

  const titleStyle = "font-bold text-[15px] leading-[18px] text-white pb-3";

  const descriptionStyle = "text-[#bebebe] text-[14px] font-[500]";

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <img
          src="/privacy.svg"
          className="h-[163px] w-[228px]"
          alt="privacy Icon"
        />
        <div className="absolute top-0 left-0">
          <img
            src="/blind-top.svg"
            className="w-[228px] h-[163px]"
            alt="blind-top icon"
          />
          <img
            src="/blinds.svg"
            className="w-[228px] h-[163px] absolute top-0 left-0"
            alt="blind icon"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="font-bold text-[15px] leading-[18px] text-white pb-2">
          Keep it secret; keep it safe.
        </p>
        <p className="text-[#bebebe] text-[15px] font-semibold px-4 pb-2">
          Private Pens are hidden everywhere on CodePen, except to you. You can
          still share them and other people can see them, they just can't find
          them through searching or browsing.
        </p>
      </div>
      <div className="mt-4">
        <button className="h-[43px] w-[143.5px] bg-[#d9b200] rounded">
          Upgrade to PRO
        </button>
      </div>
    </div>
  );
}
