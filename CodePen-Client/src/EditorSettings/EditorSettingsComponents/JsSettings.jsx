import React, { useState } from "react";
import { FaSearch, FaTimes, FaQuestion } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function JsSettings() {
  const [resources, setResources] = useState([
    "https://yourwebsite.com/script.js",
    "https://codepen.io/username/pen/aBcDef.css",
  ]);
  const [javaScriptPreprocessor, setJavaScriptPreprocessor] = useState("0");

  // Styles as constants for better readability
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
    addButton: "px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white",
    iconButton: "absolute inset-y-0 right-0 flex flex-col justify-center",
    arrowButton:
      "h-[50%] flex items-center justify-center bg-transparent px-2 text-black",
  };

  const handleIncrement = () =>
    setJavaScriptPreprocessor((prev) => Math.max(1, prev + 1));
  const handleDecrement = () =>
    setJavaScriptPreprocessor((prev) => Math.max(1, prev - 1));
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setJavaScriptPreprocessor(value ? parseInt(value, 10) : "");
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
          <p className={styles.header}>JavaScript Preprocessor</p>
          <button className={styles.button}>
            <FaQuestion className="text-xs" />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            value={javaScriptPreprocessor}
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
          <p className={styles.header}>Add External Scripts/Pens</p>
          <button className={styles.button}>
            <FaQuestion className="text-xs" />
          </button>
        </div>
        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search CDNjs (jQuery, Lodash, React, Angular, Vue.js, Ember...)"
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
        <button onClick={addResource} className={styles.addButton}>
          + add another resource
        </button>
      </div>
      <div className={`${styles.box} h-[195px]`}>
        <div className="flex justify-between">
          <p className={styles.header}>Add Packages</p>
          <button
            className={`${styles.button} flex items-center justify-center rounded`}
          >
            <FaQuestion className="text-xs" />
          </button>
        </div>
        <div className="relative">
          <p className={styles.description}>
            Search for and use JavaScript packages from npm here. By selecting a
            package, an import statement will be added to the top of the
            JavaScript editor for this package.
          </p>
          <div className="my-2">
            <input
              type="search"
              placeholder="Search npm and add a package..."
              className={`${styles.input} h-[48.5px] w-[416px] pl-8`}
            />
            <div className="absolute inset-y-0 left-0 top-[70px] flex items-center px-2">
              <FaSearch className="text-[#333]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
