import React from "react";
import { FaCheck, FaArrowLeft } from "react-icons/fa";

const containerStyle =
  "h-[938px] w-[141px] flex flex-col justify-between py-2 border-t-4";
const titleStyle =
  "font-extrabold text-[22.5px] leading-[27px] text-black text-center justify-center h-[83px] w-[141px] pt-4";
const priceStyle = "flex items-baseline justify-center text-black";
const buttonStyle =
  "h-[46.5px] w-[125.65px] text-lg leading-[21.6px] rounded-sm";
const featuresListStyle =
  "h-[550px] w-[138px] border-t-[1px] border-[#b7bbc8] my-2";
const iconStyle = "text-[20px]";
const textStyle = "text-[15px] leading-[22px] text-[#1e1f26]";

export default function Individual() {
  return (
    <div className="h-[1000px] w-[630px] bg-white rounded flex gap-2 p-5">
      {/* Free Plan */}
      <div className={`${containerStyle} border-[#717790]`}>
        <div>
          <div className={titleStyle}>Free</div>
          <div className={priceStyle}>
            <sup className="text-[21px] leading-[31.5px]">$</sup>
            <p className="font-extrabold text-[51px] leading-[51px]">0</p>
            <span className="ml-1">/month</span>
          </div>
          <div className="h-[60px] text-center py-2">
            <p className={textStyle}>Forever</p>
          </div>
          <div className="text-center mt-12">
            <button className={`${buttonStyle} bg-[#717790]`}>Sign Up</button>
          </div>
          <div className={featuresListStyle}>
            <ul className="text-[#131417]">
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#717790] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  Unlimited public Pens and Collections
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#717790] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>Unlimited templates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${containerStyle} border-[#0ebeff]`}>
        <div>
          <div className={titleStyle}>Annual Starter</div>
          <div className={priceStyle}>
            <sup className="text-[21px] leading-[31.5px]">$</sup>
            <p className="font-extrabold text-[51px] leading-[51px]">8</p>
            <span className="ml-1">/month</span>
          </div>
          <div className={`h-[60px] text-center py-2 ${textStyle}`}>
            <p className={` font-bold ${textStyle}`}>
              Billed at <br /> $96/year.
            </p>
            <p className="py-2">
              You’re{" "}
              <span className="bg-blue-200">
                saving <strong>$48</strong>
              </span>{" "}
              by billing annually.
            </p>
          </div>

          <div className="text-center mt-12">
            <button className={`${buttonStyle} bg-[#0ebeff]`}>Sign Up</button>
          </div>
          <div className={featuresListStyle}>
            <ul className="text-[#131417]">
              <li className="flex items-start my-2">
                <FaArrowLeft
                  className={`text-[#0ebeff] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>Everything in free</span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#0ebeff] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  Asset hosting
                  <br />
                  <strong>2 GB</strong> total storage, <strong>5 MB</strong> per
                  file
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#0ebeff] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  <strong>10 Projects</strong>,{" "}
                  <strong>50 files/project</strong>, 1 deployed
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#0ebeff] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  <strong>2 person</strong> collab mode,
                  <strong>10 person</strong> professor mode
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#0ebeff] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  Unlimited <strong>Private</strong> pens, collections, and
                  projects
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#0ebeff] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  Unlimited embed themes with custom CSS
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#0ebeff] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>No ads</span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#0ebeff] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>No-Login pen debug view</span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#0ebeff] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>Live view</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${containerStyle} border-[#ae63e4]`}>
        <div>
          <div className={titleStyle}>Annual Developer</div>
          <div className={priceStyle}>
            <sup className="text-[21px] leading-[31.5px]">$</sup>
            <p className="font-extrabold text-[51px] leading-[51px]">12</p>
            <span className="ml-1">/month</span>
          </div>
          <div className={`h-[60px] text-center py-2 ${textStyle}`}>
            <p className={` font-bold ${textStyle}`}>
              Billed at <br /> $144/year.
            </p>
            <p className="py-2">
              You’re{" "}
              <span className="bg-purple-200">
                saving <strong>$84</strong>
              </span>{" "}
              by billing annually.
            </p>
          </div>
          <div className="text-center mt-12">
            <button className={`${buttonStyle} bg-[#ae63e4]`}>Sign Up</button>
          </div>
          <div className={featuresListStyle}>
            <ul className="text-[#131417]">
              <li className="flex items-start my-2">
                <FaArrowLeft
                  className={`text-[#ae63e4] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>Everything in Starter</span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#ae63e4] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  Asset hosting: <strong>10 GB</strong> total storage,{" "}
                  <strong>10 MB</strong> per file
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#ae63e4] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  <strong>25</strong> Projects, <strong>150</strong>{" "}
                  files/project, 5 deployed
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#ae63e4] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  <strong>6 person</strong> collab mode, <strong>35</strong>{" "}
                  person professor mode
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#ae63e4] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  Use your own domain for projects
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${containerStyle} border-[#47cf73]`}>
        <div>
          <div className={titleStyle}>Annual Super</div>
          <div className={priceStyle}>
            <sup className="text-[21px] leading-[31.5px]">$</sup>
            <p className="font-extrabold text-[51px] leading-[51px]">26</p>
            <span className="ml-1">/month</span>
          </div>
          <div className={`h-[60px] text-center py-2 ${textStyle}`}>
            <p className={` font-bold ${textStyle}`}>
              Billed at <br /> $312/year.
            </p>
            <p className="py-2">
              You’re{" "}
              <span className="bg-green-200">
                saving <strong>$156</strong>
              </span>{" "}
              by billing annually.
            </p>
          </div>
          <div className="text-center mt-12">
            <button className={`${buttonStyle} bg-[#47cf73]`}>Sign Up</button>
          </div>
          <div className={featuresListStyle}>
            <ul className="text-[#131417]">
              <li className="flex items-start my-2">
                <FaArrowLeft
                  className={`text-[#47cf73] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>Everything in Developer</span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#47cf73] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  Asset hosting: <strong>20 GB</strong> total storage,{" "}
                  <strong>15 MB</strong> per file
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#47cf73] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  <strong>50</strong> Projects, <strong>300</strong>{" "}
                  files/project, 20 deployed
                </span>
              </li>
              <li className="flex items-start my-2">
                <FaCheck
                  className={`text-[#47cf73] ${iconStyle}`}
                  style={{ marginRight: "8px", flexShrink: 0 }}
                />
                <span className={textStyle}>
                  <strong>10 person</strong> collab mode, <strong>100 person</strong>{" "}
                   professor mode
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
