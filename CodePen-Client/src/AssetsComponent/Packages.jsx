import React, { useState } from "react";
import axios from "axios";
import { FaSearch, FaRedo } from "react-icons/fa";

export default function Packages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;

    setLoading(true);

    axios
      .get(`https://registry.npmjs.org/-/v1/search?text=${searchTerm}&size=10`)
      .then((response) => {
        setPackages(response.data.objects.map((pkg) => pkg.package));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const handleRefresh = () => {
    setSearchTerm("");
    setPackages([]);
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
          Packages from{" "}
          <span className="text-blue-400 hover:text-white">npm</span>.
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#2c303a] border border-[#717790] rounded-md h-[30px] w-[200px] text-center text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search packages..."
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
        <ul className="list-none">
          {packages.length > 0 ? (
            packages.map((pkg) => (
              <li
                key={pkg.name}
                className="mb-4 p-4 bg-[#2c303a] rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  <a
                    href={`https://www.npmjs.com/package/${pkg.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {pkg.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-300 mb-2">{pkg.description}</p>
                <a
                  href={`https://www.npmjs.com/package/${pkg.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-semibold"
                >
                  See More
                </a>
              </li>
            ))
          ) : (
            <p className="text-gray-500">
              No packages found. Try searching for something else.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
