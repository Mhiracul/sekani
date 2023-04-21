import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import yoka from "../assets/Sekani/yoka.png";
import "./YokaLogistics.css";

const YokaFooter = () => {
  return (
    <footer className="bg-white text-gray-700 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/4 lg:w-1/5 mb-4 md:mb-0">
            <img src={yoka} alt="Logo" className="h-16 logo" />
          </div>
          <div className="w-full md:w-3/4 lg:w-4/5 text-center md:text-right">
            <ul className="list-none">
              <li className="inline-block mr-6">
                <a href="/" className="hover:text-[#2976be]">
                  Home
                </a>
              </li>
              <li className="inline-block mr-6">
                <a href="/services" className="hover:text-[#2976be]">
                  Services
                </a>
              </li>
              <li className="inline-block mr-6">
                <a href="/about" className="hover:text-[#2976be]">
                  About Us
                </a>
              </li>
              <li className="inline-block">
                <a href="/contact" className="hover:text-[#2976be]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-sm mb-4 md:mb-0">
            © 2023 Yoka Logistics Company. All rights reserved.
          </div>
          <div className="text-sm">
            <ul className="flex items-center justify-center md:justify-end list-none">
              <li className="mr-6">
                <a
                  href="https://www.facebook.com"
                  className="hover:text-[#2976be]"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
              </li>
              <li className="mr-6">
                <a
                  href="https://www.twitter.com"
                  className="hover:text-[#2976be]"
                >
                  <FaTwitter className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  className="hover:text-[#2976be]"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default YokaFooter;
