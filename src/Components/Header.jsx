import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-sky-500 h-16">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <a href="/home" className="text-white font-bold text-xl">
          Sewa Mobil Yayasan
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to={"/home"} className="text-white hover:text-gray-200">
            {" "}
            Home
          </Link>
          <Link to={"/form"} className="text-white hover:text-gray-200">
            Services
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
