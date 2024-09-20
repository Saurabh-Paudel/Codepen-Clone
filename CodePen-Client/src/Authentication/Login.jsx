import React, { useState } from "react";
import { FaTimes, FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useOutletContext } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogin } = useOutletContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
      const response = await axios.post("http://localhost:8000/login", {
        email: email.trim(),
        password: password.trim(),
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        handleLogin();
        toast.success("Login successful!");

        // Delay navigation to allow the toast notification to show
        setTimeout(() => {
          navigate(location.state?.from || "/");
        }, 1500); // Increase timeout duration for better visibility
      } else {
        toast.error("Login failed: Missing token.");
      }
    } catch (error) {
      toast.error(error.response?.data?.msg || "Login failed");
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-80 transition-opacity duration-300">
        <div className="relative border-[2px] border-[#262830] bg-[#1a1a1a] rounded-md shadow-lg w-[700px] h-auto p-6 text-white">
          <button
            onClick={() => navigate(location.state?.from || "/")}
            className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors"
          >
            <FaTimes />
          </button>
          <h2 className="text-3xl mb-6 text-center font-semibold">
            Login to Your Account
          </h2>
          <div className="flex justify-center gap-4 mb-6">
            <button className="flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
              <FaFacebookF className="text-lg" />
              Sign in with Facebook
            </button>
            <button className="flex items-center gap-2 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200">
              <FaGoogle className="text-lg" />
              Sign in with Google
            </button>
            <button className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition duration-200">
              <FaGithub className="text-lg" />
              Sign in with GitHub
            </button>
          </div>
          <div className="flex items-center mb-6">
            <hr className="border-gray-600 flex-grow" />
            <span className="mx-4 text-gray-400">or</span>
            <hr className="border-gray-600 flex-grow" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm text-gray-300 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-2 border border-gray-500 rounded bg-[#262626] text-white focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm text-gray-300 mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full p-2 border border-gray-500 rounded bg-[#262626] text-white focus:outline-none focus:border-blue-500"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Log In
            </button>
          </form>
          <p className="text-center text-gray-400 mt-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-400 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
