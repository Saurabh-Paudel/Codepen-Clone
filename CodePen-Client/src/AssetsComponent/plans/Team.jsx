import React, { useState } from "react";
import { FaCheck, FaUsers } from "react-icons/fa";

export default function Team() {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const iconStyle = "text-[#d9b200] text-[20px]";
  return (
    <div className="h-auto w-[630px] bg-white rounded px-4 py-2">
      <div className="p-4 flex gap-2">
        <div className="text-[#131417] h-[280px] w-[300px] px-2">
          <p className="text-[45px] leading-[54px] font-extrabold">
            Annual <br />
            Team
          </p>
          <p className="text-[15px] leading-[22.5px]">
            Starting a team gives one team account and boosts your team members’
            plans to developer level. You can easily switch between working on
            pens, projects, and collections on team and individual accounts.
          </p>
        </div>
        <div className="h-[280px] w-[130px] p-2 text-center text-black flex flex-col justify-center items-center">
          <FaUsers className="text-6xl text-center mb-2" />
          <p className="pb-2">Team Size</p>
          <div className="flex items-center border-[1px] border-[#717790] rounded-lg h-[55.5px] w-[100px]">
            <button
              onClick={decreaseQuantity}
              className="text-xl font-bold hover:bg-gray-300 h-[55.5px] w-[43.4185px] rounded-l"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="text-center w-[33.1625px] border-none"
            />
            <button
              onClick={increaseQuantity}
              className="text-xl font-bold hover:bg-gray-300 h-[55.5px] w-[43.41875px] rounded-r"
            >
              +
            </button>
          </div>
        </div>
        <div className="h-[280px] w-[156px] text-center justify-center py-5">
          <p className=" text-black">
            <sup className="text-[21px] leading-[31.5px]">$</sup>
            <span className="text-[51px] leading-[51px] font-extrabold">
              12
            </span>
          </p>
          <p className="text-[15px] leading-[22.5px] font-[700] whitespace-nowrap text-black">
            /Month per member
          </p>
          <p className="text-[15px] leading-[22.5px] font-[700] whitespace-nowrap text-black">
            Billed at $288/year.
          </p>
          <p className="text-black">
            You’re{" "}
            <span className="text-[15px] leading-[15px] bg-[#f4e292]">
              saving $168
            </span>{" "}
            by billing annually.
          </p>
          <button className="h-[43px] w-[87px] bg-[#5A5f73] rounded text-white text-[15px] leading-[18px] my-3">
            Sign Up
          </button>
        </div>
      </div>
      <div className="border-t-[2px] border-[#c7c9d3] text-black">
        <div className="p-6 flex items-center gap-3">
          <FaUsers className="text-6xl text-center" />{" "}
          <p className="text-[18px] leading-[21.6px] font-[600]">
            TEAM ACCOUNT FEATURES
          </p>
        </div>
        <div className="flex gap-2">
          <div className="h-auto w-[300px] p-4">
            <ul>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span className="text-wrap">
                  All team members share access to the team account, which has
                  its own profile. That way everyone can work together, sharing
                  access to editing assets, pens, projects, and collections.
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span className="text-wrap">
                  Assets hosting with <strong>20 GB total storage</strong>
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span className="text-wrap">
                  <strong>40 projects</strong> with{" "}
                  <strong>300 files/project</strong> <br />
                  <span className="text-[10px]">(20 projects/member)</span>
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span className="text-wrap">
                  <strong>20 deployed projects</strong> <br />{" "}
                  <span className="text-[10px]">(10 per team member)</span>
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span>
                  Use your own domain for <strong>20 projects</strong>
                  <br />
                  <span className="text-[10px]">(10 per team member)</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="h-auto w-[300px]p-4">
            <ul>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span className="text-wrap">
                  <strong>10 person</strong> collab mode{" "}
                  <span className="text-[10px]">(Pens only)</span>
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span className="text-wrap">
                  <strong>35 person</strong> professor mode{" "}
                  <span className="text-[10px]">(Pens only)</span>
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span className="text-wrap">
                  <strong>Private</strong> pens, projects, and collection
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span className="text-wrap">No ads</span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span>Unlimited templates</span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span>
                  Debug view{" "}
                  <span className="text-[10px]">(no log in required)</span>
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span>Live view</span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={iconStyle}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />{" "}
                <span>Unlimited embed themes with custom CSS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-black bg-[rgba(198,117,255,0.3)] h-[105px] w-[570px] text-center flex justify-center items-center text-[15px] leading-[22.5px] font-[450] rounded-lg">
        <div className="p-5">
          Each team member gets all the features of a{" "}
          <strong>
            Developer <span className="bg-[#ffdd40]">PRO</span>
          </strong>{" "}
          account when they use CodePen in their personal context.
        </div>
      </div>
    </div>
  );
}
