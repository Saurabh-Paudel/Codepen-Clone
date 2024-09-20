import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function HtmlSettings() {
  const [preprocessor, setPreprocessor] = useState("");

  const styles = {
    box: "bg-gradient-to-r from-[#71779085] to-[#1314173b] pl-4 py-2 border-l-[3px] border-[#717790] mb-2",
    header: "font-bold text-[15px] leading-[18px] text-white pb-2",
    input:
      "w-full pr-10 pl-3 py-2 text-[#333] bg-[#e1e1e1] rounded focus:outline-none focus:ring-2 focus:ring-[#717790] focus:border-transparent",
    buttonContainer: "absolute inset-y-0 right-0 flex flex-col justify-center",
    button: "text-black bg-[#5a5f73] h-[14px] w-[14px]",
  };

  const handleIncrement = () => {
    setPreprocessor((prev) => Math.max(1, prev + 1));
  };

  const handleDecrement = () => {
    setPreprocessor((prev) => Math.max(1, prev - 1));
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setPreprocessor(value ? parseInt(value, 10) : "");
    }
  };

  return (
    <div>
      <div className={`${styles.box} h-[94px]`}>
        <div className="flex justify-between">
          <p className={styles.header}>HTML Preprocessor</p>
          <button className={styles.button}>
            <FaQuestion className="text-xs" />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            id="Preprocessor"
            placeholder="None"
            value={preprocessor}
            onChange={handleChange}
            className={styles.input}
          />
          <div className={styles.buttonContainer}>
            <button
              type="button"
              onClick={handleIncrement}
              className="text-black border-b border-[#ccc] "
            >
              <IoIosArrowUp />
            </button>
            <button
              type="button"
              onClick={handleDecrement}
              className="text-black border-[#ccc]"
            >
              <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.box} h-[94px]`}>
        <div className="flex justify-between">
          <p className={styles.header}>Add Class(es) to {"<html>"}</p>
          <button className={styles.button}>
            <FaQuestion className="text-xs" />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="e.g. single post post-1234"
            className="w-full pr-10 pl-3 py-2 text-[#333] bg-[#e1e1e1] rounded focus:outline-none focus:ring-2 focus:ring-[#717790] focus:border-transparent"
          />
        </div>
      </div>
      <div className={`${styles.box} h-[157.7px]`}>
        <div className="flex justify-between">
          <p className={styles.header}>Stuff for {"<head>"}</p>
          <button className={styles.button}>
            <FaQuestion className="text-xs" />
          </button>
        </div>
        <div className="relative">
          <textarea
            placeholder="e.g. <meta>, <script>, <link>"
            className="w-full h-[100px] pr-10 pl-3 py-2 text-[#333] bg-[#e1e1e1] rounded focus:outline-none focus:ring-2 focus:ring-[#717790] focus:border-transparent placeholder:text-sm placeholder:text-[#999]"
          />
        </div>
      </div>
    </div>
  );
}
