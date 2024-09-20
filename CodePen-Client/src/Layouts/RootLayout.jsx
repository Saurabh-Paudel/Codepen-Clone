import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";
import DefaultLayout from "./DefaultLayout";
import ShortcutModel from "../Models/ShortcutModel";
import Console from "../Models/ConsoleModel";
import AssetsModel from "../Models/AssetsModel";
import EditorSetting from "../EditorSettings/EditorSetting";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout() {
  const [layout, setLayout] = useState("Default");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isConsoleVisible, setConsoleVisible] = useState(false);
  const [isAssetsModelVisible, setAssetsModelVisible] = useState(false);
  const [isEditorSettingsOpen, setEditorSettingsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));


  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const savedLayout = localStorage.getItem("currentLayout");
    if (savedLayout) {
      setLayout(savedLayout);
    }
  }, []);

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    localStorage.setItem("currentLayout", newLayout);
  };

  const openModel = () => {
    setIsModelOpen(true);
  };

  const closeModel = () => {
    setIsModelOpen(false);
  };

  const toggleConsole = () => {
    setConsoleVisible(!isConsoleVisible);
  };

  const openAssetsModel = () => {
    setAssetsModelVisible(true);
  };

  const closeAssetsModel = () => {
    setAssetsModelVisible(false);
  };

  const toggleEditorSettings = () => {
    setEditorSettingsOpen((prev) => !prev);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    toast.success("Logout successful!");
  };

  return (
    <>
      <Navbar
        currentLayout={layout}
        onLayoutChange={handleLayoutChange}
        onOpenSettings={toggleEditorSettings}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      <div>
        <div className="flex-1">
          <Outlet context={{ handleLogin }} />
        </div>
        {layout === "Left Layout" && <LeftLayout />}
        {layout === "Right Layout" && <RightLayout />}
        {layout === "Default" && <DefaultLayout />}
      </div>
      <Footer
        openModel={openModel}
        onConsoleToggle={toggleConsole}
        openAssetsToggle={openAssetsModel}
      />
      {isModelOpen && <ShortcutModel closeModel={closeModel} />}
      {isConsoleVisible && (
        <Console
          isVisible={isConsoleVisible}
          onClose={() => setConsoleVisible(false)}
        />
      )}
      {isAssetsModelVisible && (
        <AssetsModel
          isVisible={isAssetsModelVisible}
          closeAssetsModel={closeAssetsModel}
        />
      )}
      {isEditorSettingsOpen && (
        <EditorSetting onClose={toggleEditorSettings} editorType="HTML" />
      )}
      <ToastContainer />
    </>
  );
}
