import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import LeftLayout from "./Layouts/LeftLayout";
import RightLayout from "./Layouts/RightLayout";
import DefaultLayout from "./Layouts/DefaultLayout";
import ShortcutModel from "./Models/ShortcutModel";
import AssetsModel from "./Models/AssetsModel";
import SignUp from "./Authentication/SignUp";
import Login from "./Authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "left",
        element: <LeftLayout />,
      },
      {
        path: "right",
        element: <RightLayout />,
      },
      {
        path: "default",
        element: <DefaultLayout />,
      },
      {
        path: "/shortcutmodel",
        element: <ShortcutModel />,
      },
      {
        path: "/assetsmodel",
        element: <AssetsModel />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
