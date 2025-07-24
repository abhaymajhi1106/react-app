import React from "react";
import "./styles/Signup.css";

import user_icon from "../assets/user.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const Signup = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div class="backdrop-blur-xl bg-white/30 shadow-2xl rounded-3xl p-10 max-w-md w-full">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
          Create Account
        </h2>

        <form class="space-y-6">
          <div class="flex items-center bg-white/50 border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
            <img src={user_icon} alt="User Icon" class="w-5 h-5 mr-3" />
            <input type="text" placeholder="Username" class="bg-transparent w-full focus:outline-none text-gray-800 placeholder-gray-500" required />
              
          </div>

          <div class="flex items-center bg-white/50 border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
            <img src={email_icon} alt="Email Icon" class="w-5 h-5 mr-3" />
            <input type="email" placeholder="Email" class="bg-transparent w-full focus:outline-none text-gray-800 placeholder-gray-500" required />
          </div>

          <div class="flex items-center bg-white/50 border border-gray-300 rounded-xl px-4 py-2 shadow-sm">
            <img src={password_icon} alt="Password Icon" class="w-5 h-5 mr-3" />
            <input type="password" placeholder="Password" class="bg-transparent w-full focus:outline-none text-gray-800 placeholder-gray-500" required />
          </div>

          <button type="submit" class="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-600 hover:to-pink-500 text-white py-2 rounded-xl font-semibold shadow-md transition-all duration-300">
            Sign Up
          </button>
        </form>

        <p class="mt-6 text-sm text-gray-600 text-center">
          Already have an account?
          <a href="#" class="text-blue-600 hover:underline font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
