import React, { useState } from "react";

export default function TemplateSettings() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className="bg-gradient-to-r from-[#71779085] to-[#1314173b] p-4 border-l-[3px] border-[#717790]">
        <p className="font-bold text-[15px] leading-[18px] text-white pb-3">
          Make Template?
        </p>
        <p className="text-[#bebebe] text-[14px] font-[500]">
          Templates are Pens that can be used to start other Pens quickly from
          the <br /> create menu. The new Pen will copy all the code and
          settings from the template and make a new Pen (that is not a fork).
          You can{" "}
          <a href="">
            <span className="text-blue-400 underline">
              view all of your templates
            </span>
          </a>
          , or{" "}
          <a href="http://">
            <span className="text-blue-400 underline">
              learn more in the documentation
            </span>
          </a>
          .
        </p>
        <div className="flex items-center py-3">
          <div
            onClick={handleToggle}
            className={`w-[52px] h-[27px] flex items-center rounded-full cursor-pointer ${
              isToggled ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-7 h-7 rounded-full shadow-md transform  ${
                isToggled ? "translate-x-6 pr-2" : ""
              } transition-transform`}
            />
          </div>
          <span className="ml-3 text-white">{isToggled ? "On" : "Off"}</span>
        </div>
      </div>
    </>
  );
}
