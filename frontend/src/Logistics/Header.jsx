import React from "react";
import yoka from "../assets/Sekani/yoka.png";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a className="flex flex-col items-center" href="/">
            <img src={yoka} alt="Logo" className="w-12 h-12 mr-2" />
            <span className="text-xs font-light text-black">
              Yoka Logistics
            </span>
          </a>
          <nav className="flex items-center">
            <ul className="text-black uppercase font-bold text-sm sm:flex hidden">
              <li className="mr-3">
                <a
                  href="/"
                  className="border-b-2 border-transparent hover:border-blue-500"
                >
                  Home
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="/services"
                  className="border-b-2 border-transparent hover:border-blue-500"
                >
                  Services
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="/about"
                  className="border-b-2 border-transparent hover:border-blue-500"
                >
                  About Us
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="/contact"
                  className="border-b-2 border-transparent hover:border-blue-500"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <button className="sm:hidden flex items-center px-3 py-2 border rounded text-gray-800 border-gray-800 hover:text-white hover:bg-gray-800">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
