import React from "react";

const Model = ({ closeModel }) => {
  const textDecoration =
    "bg-[#c7c9d3] text-[#1e1f26] px-2 font-bold text-sm rounded";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative bg-[#5a5f73] rounded-sm shadow-lg w-[810px] h-[500px]">
        <div className="absolute inset-1 bg-[#000000] rounded-sm shadow-lg p-2">
          <button
            onClick={closeModel}
            className="absolute top-1 right-8 bg-red-600 text-white text-center h-6 w-6 rounded-md flex items-center justify-center"
          >
            &#x2715;
          </button>

          <div className="p-4 h-full overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              <div className="h-full text-white">
                <h2 className="text-[28px] leading-[32px] font-bold mb-2">
                  Editor Commands
                </h2>
                <hr className="border-[#5a5f73] border-t-2 mt-2" />
                <ul className="list-none mt-1 space-y-1">
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>Space</span>
                    <span>Autocomplete</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>F</span>
                    <span>Find</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>G</span>
                    <span>Find Next</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>{"\u21E7"}</span>{" "}
                    <span className={textDecoration}>G</span>
                    <span>Find Previous</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>{"\u21E7"}</span>
                    <span className={textDecoration}>F</span>
                    <span>Find & Replace</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>[</span>
                    <span>Indent Code Right</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>]</span>
                    <span>Indent Code Left</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>Space</span>
                    <span>Autocomplete</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>{"\u21E7"}</span>
                    <span className={textDecoration}>Tab</span>
                    <span>Auto Indent Code</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>/</span>
                    <span>Line Comment</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>{"\u21E7"}</span>
                    <span className={textDecoration}>/</span>
                    <span>Block Comment</span>
                  </li>
                </ul>
                <div className="mt-4">
                  Also See :{" "}
                  <a
                    href="#"
                    className="text-blue-400 font-bold hover:text-white"
                  >
                    {" "}
                    Tab Triggers
                  </a>
                </div>
              </div>
              <div className="h-full text-white">
                <h2 className="text-[28px] leading-[32px] font-bold mb-2">
                  Editor Focus
                </h2>
                <hr className="border-[#5a5f73] border-t-2 mt-2" />
                <ul className="list-none mt-1 space-y-1">
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>Alt</span>
                    <span className={textDecoration}>1</span>
                    <span>HTML Editor</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>Alt</span>
                    <span className={textDecoration}>2</span>
                    <span>CSS Editor</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>Alt</span>
                    <span className={textDecoration}>3</span>
                    <span>Js Editor</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>Alt</span>
                    <span className={textDecoration}>4</span>
                    <span>Toogle Console</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>Ctrl</span>
                    <span className={textDecoration}>Alt</span>
                    <span className={textDecoration}>0</span>
                    <span>Preview</span>
                  </li>
                  <li className="flex items-center space-x-1">
                    <span className={textDecoration}>ESC</span>
                    <span>Exit currently focused editor</span>
                  </li>
                </ul>
              </div>
              <div className="h-full text-white">
                <div className="h-[170px]">
                  <h2 className="text-[28px] leading-[32px] font-bold mb-2">
                    Misc
                  </h2>
                  <hr className="border-[#5a5f73] border-t-2 mt-2" />
                  <ul className="list-none mt-1 space-y-1">
                    <li className="flex items-center space-x-1">
                      <span className={textDecoration}>Ctrl</span>
                      <span className={textDecoration}>{"\u21E7"}</span>
                      <span className={textDecoration}>7</span>
                      <span>Re-run Preview</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span className={textDecoration}>Ctrl</span>
                      <span className={textDecoration}>{"\u21E7"}</span>
                      <span className={textDecoration}>8</span>
                      <span>Clear All Analyze Error</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span className={textDecoration}>Ctrl</span>
                      <span className={textDecoration}>{"\u21E7"}</span>
                      <span className={textDecoration}>9</span>
                      <span>Open This Dialog</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span className={textDecoration}>Ctrl</span>
                      <span className={textDecoration}>{"\u21E7"}</span>
                      <span className={textDecoration}>0</span>
                      <span>Open Debug View</span>
                    </li>
                  </ul>
                </div>
                <div className="h-[75px]">
                  <h2 className="text-[28px] leading-[32px] font-bold mb-2">
                    HTML Specific
                  </h2>
                  <hr className="border-[#5a5f73] border-t-2 mt-2" />
                  <ul className="list-none mt-1 space-y-1">
                    <li className="flex items-center space-x-1">
                      <span className={textDecoration}>Ctrl</span>
                      <span className={textDecoration}>{"\u21E7"}</span>
                      <span className={textDecoration}>A</span>
                      <span>Wrap With...</span>
                    </li>
                  </ul>
                </div>
                <div className="h-[170px]">
                  <h2 className="text-[28px] leading-[32px] font-bold mb-2">
                    Pen Actions
                  </h2>
                  <hr className="border-[#5a5f73] border-t-2 mt-2" />
                  <ul className="list-none mt-1 space-y-1">
                    <li className="flex items-center space-x-1">
                      <span className={textDecoration}>Ctrl</span>
                      <span className={textDecoration}>P</span>
                      <span>Create New Pen</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span className={textDecoration}>Ctrl</span>
                      <span className={textDecoration}>S</span>
                      <span>Save</span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span className={textDecoration}>Ctrl</span>
                      <span className={textDecoration}>{"\u21E7"}</span>
                      <span className={textDecoration}>S</span>
                      <span>Save As Private</span>
                      <span className="text-[10px] leading-[15px] bg-[#ffdd40] p-2 text-center h-2 w-auto flex items-center text-black">
                        Pro
                      </span>
                    </li>
                    <li className="flex items-center space-x-1">
                      <span className={textDecoration}>Ctrl</span>
                      <span className={textDecoration}>I</span>
                      <span>Info Panel {"(if owned)"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
