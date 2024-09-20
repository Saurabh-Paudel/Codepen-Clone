import React from "react";

export default function ScreenshotSetting() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#71779085] to-[#1314173b] p-4 border-l-[3px] border-[#717790]">
        <p className="font-bold text-[15px] leading-[18px] text-white pb-3">
          Screenshot or Custom Thumbnail
        </p>
        <p className="text-[#bebebe] text-[15px] font-semibold">
          Screenshots of Pens are shown in mobile browsers, RSS feeds, to <br />{" "}
          users who chose images instead of iframes, and in social media <br />{" "}
          sharing.
        </p>
      </div>
    </>
  );
}
