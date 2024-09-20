import React, { useState } from "react";
import { FaSearch, FaTimes, FaQuestion } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
export default function CssSettings() {
  const [CssPreprocessor, setCssPreprocessor] = useState("0");
  const [resources, setResources] = useState([
    "https://yourwebsite.com/script.css",
    "https://codepen.io/username/pen/aBcDef.css",
  ]);
  const styles = {
    box: "bg-gradient-to-r from-[#71779085] to-[#1314173b] pl-4 py-2 border-l-[3px] border-[#717790] mb-2",
    header: "font-bold text-[15px] leading-[18px] text-white pb-2",
    description: "text-[#bebebe] text-[14px] font-[500]",
    button: "text-black bg-[#5a5f73] h-[14px] w-[14px]",
    input:
      "w-full pr-10 pl-3 py-2 text-[#333] bg-[#e1e1e1] rounded focus:outline-none focus:ring-2 focus:ring-[#717790] focus:border-transparent",
    searchInput:
      "w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500",
    resourceInput:
      "w-full h-[46px] pl-10 pr-10 py-2 bg-white border border-gray-700 rounded-md focus:outline-none focus:border-blue-500",
    resourceContainer: "relative mb-3 flex items-center",
    addButton: "bg-[#5a5f73] h-[20px] w-[138px] rounded-md",
    iconButton: "absolute inset-y-0 right-0 flex flex-col justify-center",
    arrowButton:
      "h-[50%] flex items-center justify-center bg-transparent px-2 text-black",
  };
  const handleIncrement = () =>
    setCssPreprocessor((prev) => Math.max(1, prev + 1));
  const handleDecrement = () =>
    setCssPreprocessor((prev) => Math.max(1, prev - 1));
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCssPreprocessor(value ? parseInt(value, 10) : "");
    }
  };
  const addResource = () => setResources([...resources, ""]);
  const updateResource = (index, value) => {
    const newResources = [...resources];
    newResources[index] = value;
    setResources(newResources);
  };
  const removeResource = (index) =>
    setResources(resources.filter((_, i) => i !== index));
  return (
    <div className="max-h-[450px] overflow-y-auto px-2">
      <div className={`${styles.box} h-[94px]`}>
        <div className="flex justify-between">
          <p className={styles.header}>CSS Preprocessor</p>
          <button className={styles.button}>
            <FaQuestion className="text-xs" />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            value={CssPreprocessor}
            onChange={handleChange}
            className={styles.input}
          />
          <div className={styles.iconButton}>
            <button
              type="button"
              onClick={handleIncrement}
              className={`${styles.arrowButton} border-b border-[#ccc]`}
            >
              <IoIosArrowUp />
            </button>
            <button
              type="button"
              onClick={handleDecrement}
              className={styles.arrowButton}
            >
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.box} h-auto`}>
        <div className="flex justify-between">
          <p className={styles.header}>CSS Base</p>
          <button className={styles.button}>
            <FaQuestion className="text-xs" />
          </button>
        </div>
        <div className="text-[#bebebe] text-[15px] font-semibold space-y-2">
          <div>
            <input type="radio" name="base" id="Normalize" className="mr-2" />
            <label htmlFor="Normalize">Normalize</label>
          </div>
          <div>
            <input type="radio" name="base" id="Reset" className="mr-2" />
            <label htmlFor="Reset">Reset</label>
          </div>
          <div>
            <input type="radio" name="base" id="Neither" className="mr-2" />
            <label htmlFor="Neither">Neither</label>
          </div>
        </div>
      </div>
      <div className={`${styles.box} h-auto`}>
        <div className="flex justify-between">
          <p className={styles.header}>Vendor Prefixing</p>
          <button className={styles.button}>
            <FaQuestion className="text-xs" />
          </button>
        </div>
        <div className="text-[#bebebe] text-[15px] font-semibold space-y-2">
          <div>
            <input
              type="radio"
              name="prefixing"
              id="Autoprefixer"
              className="mr-2"
            />
            <label htmlFor="Autoprefixer">Autoprefixer</label>
          </div>
          <div>
            <input type="radio" name="prefixing" id="tabs" Prefixfree="mr-2" />
            <label htmlFor="Prefixfree">Prefixfree</label>
          </div>
          <div>
            <input
              type="radio"
              name="prefixing"
              id="Neither"
              className="mr-2"
            />
            <label htmlFor="Neither">Neither</label>
          </div>
        </div>
      </div>
      <div className={`${styles.box} h-auto`}>
        <div className="flex justify-between">
          <p className={styles.header}>Add External Scripts/Pens</p>
          <button className={styles.button}>
            <FaQuestion className="text-xs" />
          </button>
        </div>
        <div className="py-2">
          Any URLs added here will be added as {"<link>s"} in order, and before
          the CSS in the editor. You can use the CSS from another Pen by using
          its URL and the proper{" "}
          <span className="text-blue-500 underline">URL extension</span>.
        </div>
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for resources (Bootstrap, Foundation, Animation.css...)"
            className={styles.searchInput}
          />
        </div>
        <div className="max-h-[200px] overflow-y-auto">
          {resources.map((resource, index) => (
            <div key={index} className={styles.resourceContainer}>
              <IoMenu className="absolute left-3 text-gray-400" />
              <input
                type="text"
                placeholder={resource}
                onChange={(e) => updateResource(index, e.target.value)}
                className={styles.resourceInput}
              />
              <FaTimes
                className="absolute right-3 text-red-500 cursor-pointer"
                onClick={() => removeResource(index)}
              />
            </div>
          ))}
        </div>
        <button
          onClick={addResource}
          className={`${styles.addButton} text-white text-[12px] leading-[14.4px] text-nowrap`}
        >
          + add another resource
        </button>
      </div>
    </div>
  );
}
