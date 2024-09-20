import React, { useState } from "react";
import Packages from "../AssetsComponent/Packages";
import Subscription from "../AssetsComponent/Subscription";
import Photos from "../AssetsComponent/Photos";
import IconSearch from "../AssetsComponent/IconSearch";
import FontSearch from "../AssetsComponent/FontSearch";
import ColorPicker from "../AssetsComponent/ColorSearch";

const AssetsModel = ({ isVisible, closeAssetsModel }) => {
  const [activeTab, setActiveTab] = useState("Your plan");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative border-[2px] border-[#262830] bg-[#000000] rounded-md shadow-lg w-full max-w-[900px] h-full max-h-[615px] p-1">
        <div className="flex items-center justify-between p-2 border-b-[2px] border-[#252830]">
          <h2 className="text-lg font-semibold text-white">Assets</h2>
          <button
            onClick={closeAssetsModel}
            className="absolute top-2 right-2 bg-[#5a5f73] text-white text-center h-6 w-6"
          >
            &#x2715;
          </button>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden absolute top-3 left-20 bg-[#5a5f73] text-white text-center h-6 w-6"
          >
            ☰
          </button>
        </div>
        <div className="flex lg:flex-row flex-col h-full">
          <div
            className={`lg:w-[188px] lg:flex lg:flex-col lg:gap-2 text-white ${
              isSidebarOpen ? "block" : "hidden lg:block"
            }`}
          >
            <ul className="list-none text-sm leading-4 text-[#aaaebc]">
              <li
                className={`py-2 pl-2 flex items-center space-x-2 border-l-4 cursor-pointer transition-all duration-300 group ${
                  activeTab === "Your plan"
                    ? "border-l-green-600 text-white font-bold bg-[#2c303a]"
                    : "border-transparent hover:bg-[#2c303a] hover:text-white hover:font-bold"
                }`}
                onClick={() => setActiveTab("Your plan")}
              >
                <span className="text-sm leading-4">Your plan</span>
                <span className="text-[10px] leading-[15px] bg-[#ffdd40] p-2 text-center h-2 w-auto flex items-center text-black">
                  Pro
                </span>
              </li>
              <div className="my-3 pl-2 text-white font-semibold">
                Free Resources
              </div>
              {["Packages", "Photos", "Icons", "Fonts", "Colors"].map((tab) => (
                <li
                  key={tab}
                  className={`py-2 pl-2 flex items-center space-x-2 border-l-4 cursor-pointer transition-all duration-300 group ${
                    activeTab === tab
                      ? "border-l-green-600 text-white font-bold bg-[#2c303a]"
                      : "border-transparent hover:bg-[#2c303a] hover:text-white hover:font-bold"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span className="text-sm leading-4">{tab}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 max-h-[550px] overflow-y-auto overflow-x-auto">
            <div className="px-4">
              {activeTab === "Your plan" && <Subscription />}
              {activeTab === "Packages" && <Packages />}
              {activeTab === "Photos" && <Photos />}
              {activeTab === "Icons" && <IconSearch />}
              {activeTab === "Fonts" && <FontSearch />}
              {activeTab === "Colors" && <ColorPicker />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsModel;
