import React, { useState } from "react";
import axios from "axios";
import { FaRedo } from "react-icons/fa";

export default function Photos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;

    setLoading(true);

    const placeholderImages = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      src: `https://via.placeholder.com/200x300?text=${searchTerm}${i + 1}`,
      alt: `Placeholder image ${i + 1}`,
    }));

    setTimeout(() => {
      setImages(placeholderImages);
      setLoading(false);
    }, 1000);
  };

  const handleCopy = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => alert("Image URL copied to clipboard!"))
      .catch((error) => console.error("Failed to copy:", error));
  };

  return (
    <div className="w-full p-2">
      <div className="h-[50px] w-full bg-[#1e1f26] flex items-center justify-between px-2">
        <div>
          Photos from{" "}
          <a
            href="https://placeholder.com/"
            className="text-blue-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Placeholder.com
          </a>
          . Click to Copy.
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#2c303a] border border-[#717790] rounded-md h-[30px] w-[200px] text-center text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search photos..."
          />
          <button
            type="button"
            onClick={handleSearch}
            className="bg-[#717790] text-white text-[13px] font-medium rounded-md h-[30px] w-[80px] hover:bg-[#5a5f73] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
          <button
            type="button"
            onClick={() => {
              setImages([]);
              setSearchTerm("");
            }}
            className="bg-[#717790] text-white text-[13px] font-medium rounded-md h-[30px] w-[30px] flex items-center justify-center hover:bg-[#5a5f73] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaRedo />
          </button>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center items-center mt-4">
          <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.length > 0 ? (
          images.map((image) => (
            <div
              key={image.id}
              className="relative bg-[#2c303a] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#00000080] p-2 text-white text-sm flex justify-between items-center">
                <span>{image.alt || "No description"}</span>
                <button
                  onClick={() => handleCopy(image.src)}
                  className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs hover:bg-blue-600"
                >
                  Copy URL
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white">No images found.</p>
        )}
      </div>
    </div>
  );
}
