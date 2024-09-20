import React, { useState } from "react";
import "../index.css";
import { AiFillCloud, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import {
  RiArrowDropDownLine,
  RiLayoutLeftFill,
  RiLayoutTopFill,
  RiLayoutRightFill,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar({
  currentLayout,
  onLayoutChange,
  onOpenSettings,
  isLoggedIn,
  onLogout,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu toggle
  const navigate = useNavigate();

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function handleLayoutChange(layout) {
    onLayoutChange(layout);
    setIsDropdownOpen(false);
  }

  function handleLogoutClick() {
    onLogout();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  const layoutIcons = {
    "Left Layout": (
      <div onClick={() => handleLayoutChange("Left Layout")}>
        <RiLayoutLeftFill className="text-base" />
      </div>
    ),
    Default: (
      <div onClick={() => handleLayoutChange("Default")}>
        <RiLayoutTopFill className="text-base" />
      </div>
    ),
    "Right Layout": (
      <div onClick={() => handleLayoutChange("Right Layout")}>
        <RiLayoutRightFill className="text-base" />
      </div>
    ),
  };

  const buttonStyles =
    "h-[42.8px] rounded-md flex items-center justify-center font-lato text-[15px] leading-[18px] px-2";
  const primaryButtonStyles = `${buttonStyles} text-white bg-[#5a5f73]`;
  const secondaryButtonStyles = `${buttonStyles} text-black bg-[#39df70] hover:bg-[#248c46] hover:text-white`;
  const disabledButtonStyles = `${buttonStyles} text-gray-500 bg-gray-700 cursor-not-allowed`;

  return (
    <div className="h-[65px] w-full bg-[#010101] flex items-center px-5 justify-between fixed z-50 top-0 shadow-lg">
      {/* Logo */}
      <div>
        <img
          src="/codepen.png"
          alt="CodePen"
          className="h-auto w-[148px] sm:w-[120px] lg:w-[148px]"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <AiOutlineClose className="text-white text-2xl" />
          ) : (
            <AiOutlineMenu className="text-white text-2xl" />
          )}
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white text-center p-6 transform transition-transform duration-500 ease-in-out z-40 sm:hidden`}
      >
        <div className="flex justify-end">
          <button onClick={() => setMenuOpen(false)}>
            <AiOutlineClose className="text-white text-2xl hover:scale-110 transition-transform" />
          </button>
        </div>
        <div className="mt-10 flex flex-col gap-6 text-center">
          <button
            className={`${
              isLoggedIn ? primaryButtonStyles : disabledButtonStyles
            } w-full`}
            disabled={!isLoggedIn}
          >
            <AiFillCloud />
            &nbsp;Save
          </button>

          <button
            className={`${primaryButtonStyles} w-full`}
            onClick={onOpenSettings}
          >
            <IoMdSettings />
            &nbsp;Settings
          </button>

          {/* Layout Dropdown */}
          <div className="relative w-full">
            <button
              className={`${primaryButtonStyles} w-full flex items-center justify-center`}
              onClick={toggleDropdown}
            >
              {layoutIcons[currentLayout]}
              <RiArrowDropDownLine className="text-xl ml-1" />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute flex top-[100%] left-0 mt-1 w-full bg-gray-700 text-white border border-gray-700 rounded-md shadow-lg z-50">
                {Object.keys(layoutIcons).map((layout) => (
                  <div
                    key={layout}
                    className="w-full justify-center px-4 py-2 hover:bg-gray-600 flex items-center cursor-pointer"
                    onClick={() => handleLayoutChange(layout)}
                  >
                    {layoutIcons[layout]}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          {isLoggedIn ? (
            <button
              className={`${secondaryButtonStyles} w-full`}
              onClick={handleLogoutClick}
            >
              Log Out
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className={`${secondaryButtonStyles} w-full`}>
                  Sign In
                </button>
              </Link>
              <Link to="/login">
                <button className={`${primaryButtonStyles} w-full`}>
                  Log In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Regular Menu for larger screens */}
      <div className="hidden sm:flex sm:items-center sm:gap-3 relative">
        <button
          className={`${
            isLoggedIn ? primaryButtonStyles : disabledButtonStyles
          } w-[88.7125px]`}
          disabled={!isLoggedIn}
        >
          <AiFillCloud />
          &nbsp;Save
        </button>

        <button
          className={`${primaryButtonStyles} w-[111.1412px]`}
          onClick={onOpenSettings}
        >
          <IoMdSettings />
          &nbsp;Settings
        </button>

        {/* Layout Dropdown */}
        <button
          className={`${primaryButtonStyles} w-[52.8px] flex items-center`}
          onClick={toggleDropdown}
        >
          {layoutIcons[currentLayout]}
          <RiArrowDropDownLine className="text-xl ml-1" />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute flex top-[100%] right-[5%] mt-1 w-[160px] bg-gray-700 text-white border border-gray-700 rounded-md shadow-lg z-50 sm:right-[10%] lg:right-[30%]">
            {Object.keys(layoutIcons).map((layout) => (
              <div
                key={layout}
                className="w-full text-left px-4 py-2 hover:bg-gray-600 flex items-center cursor-pointer"
                onClick={() => handleLayoutChange(layout)}
              >
                {layoutIcons[layout]}
              </div>
            ))}
          </div>
        )}

        {/* Auth Buttons */}
        {isLoggedIn ? (
          <button
            className={`${secondaryButtonStyles} w-[86.725px]`}
            onClick={handleLogoutClick}
          >
            Log Out
          </button>
        ) : (
          <>
            <Link to="/signup">
              <button className={`${secondaryButtonStyles} w-[86.725px]`}>
                Sign In
              </button>
            </Link>
            <Link to="/login">
              <button className={`${primaryButtonStyles} w-[86.725px]`}>
                Log In
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
