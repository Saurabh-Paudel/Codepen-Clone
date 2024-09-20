import React, { useState } from "react";
import { FaSearch, FaRedo } from "react-icons/fa";
import { IconContext } from "react-icons";
import * as Icons from "react-icons/fa";

export default function IconSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredIcons, setFilteredIcons] = useState([]);
  const [loading, setLoading] = useState(false);

  const iconNames = Object.keys(Icons);

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;

    setLoading(true);

    const results = iconNames.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredIcons(results);
    setLoading(false);
  };

  const handleRefresh = () => {
    setSearchTerm("");
    setFilteredIcons([]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="relative w-full p-4">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
      <div className="h-[50px] w-full bg-[#1e1f26] flex items-center justify-between px-4">
        <div>
          Search for icons from{" "}
          <span className="text-blue-400 hover:text-white">react-icons</span>.
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#2c303a] border border-[#717790] rounded-md h-[30px] w-[200px] text-center text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Icons..."
          />
          <button
            type="button"
            onClick={handleSearch}
            className="bg-[#717790] text-white text-[13px] font-medium rounded-md h-[30px] w-[30px] flex items-center justify-center hover:bg-[#5a5f73] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaSearch />
          </button>
          <button
            type="button"
            onClick={handleRefresh}
            className="bg-[#717790] text-white text-[13px] font-medium rounded-md h-[30px] w-[30px] flex items-center justify-center hover:bg-[#5a5f73] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaRedo />
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap gap-4">
          {filteredIcons.length > 0 ? (
            filteredIcons.map((iconName) => {
              const IconComponent = Icons[iconName];
              return (
                <div
                  key={iconName}
                  className="p-4 bg-[#2c303a] rounded-lg shadow-lg flex items-center space-x-2 cursor-pointer"
                  onClick={() => copyToClipboard(iconName)}
                >
                  <IconContext.Provider value={{ className: "w-8 h-8" }}>
                    <IconComponent />
                  </IconContext.Provider>
                  <span className="text-white">{iconName}</span>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">
              No icons found. Try searching for something else.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
