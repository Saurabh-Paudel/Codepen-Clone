import React, { useState } from "react";
import { FaUser, FaUsers } from "react-icons/fa6";
import Individual from "./plans/Individual";
import Team from "./plans/Team";

export default function Subscription() {
  const [selectedTab, setSelectedTab] = useState("Individual");

  return (
    <div className="px-4">
      <div className="border-[5px] border-[#ffdd40] h-[297px] w-[633px] rounded-2xl text-white p-6 mb-4">
        <p className="font-sans text-3xl leading-9 flex items-center">
          Asset uploading is a
          <span className="bg-[#ffdd40] text-xs leading-3 font-bold text-black px-2 py-1 mx-2">
            PRO
          </span>
          feature.
        </p>
        <p className="text-[19.5px] leading-[29.25px] py-4">
          As a PRO member, you can drag-and-drop upload files here <br /> to use
          as resources. Images, CSS frameworks, JavaScript <br /> libraries, 3D
          models, JSON data... anything you want! You <br />
          can even edit them anytime, like any other code on CodePen.
        </p>
        <button className="text-[15px] leading-[18px] text-center text-black bg-[#d9b200] h-[43px] w-[90px] rounded-md">
          Go PRO
        </button>
      </div>
      <div className="h-[232.5px] w-[630px] flex items-center gap-5">
        <div>
          <p className="text-[45px] leading-[49.5px] font-bold">
            Choose a <br />
            Plan
          </p>
          <p className="py-2">
            What do you get for being PRO? A <br /> lot!
          </p>
          <button className="bg-[#5A5f73] h-[46.4px] w-[178px] text-lg leading-[21.6px] rounded-md">
            See PRO Features
          </button>
        </div>
        <div className="flex text-black text-[21px] text-center leading-[21px]">
          <div
            className={`h-[101px] w-[179px] rounded-l-md flex flex-col justify-center items-center cursor-pointer ${
              selectedTab === "Individual"
                ? "bg-[#47cf73] text-white"
                : "bg-[#868ca0]"
            }`}
            onClick={() => setSelectedTab("Individual")}
          >
            <FaUser className="text-[21px]" />
            Individual Plans
          </div>
          <div
            className={`h-[101px] w-[179px] rounded-r-md flex flex-col justify-center items-center cursor-pointer ${
              selectedTab === "Team"
                ? "bg-[#ffdd40] text-black"
                : "bg-[#868ca0]"
            }`}
            onClick={() => setSelectedTab("Team")}
          >
            <FaUsers className="text-[21px]" />
            Team Plans
          </div>
        </div>
      </div>
      <div className="mt-4">
        {selectedTab === "Individual" && (
          <div>
            <Individual />
          </div>
        )}
        {selectedTab === "Team" && (
          <div>
            <Team />
          </div>
        )}
      </div>
    </div>
  );
}
