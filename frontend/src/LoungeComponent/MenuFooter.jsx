import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const MenuFooter = () => {
  return (
    <footer>
      <div>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
          <span className="text-black text-sm text-center sm:text-left font-medium ">
            +234 9066306174 office@thesekanimall.ng
          </span>
          <div className="flex gap-4">
            <FaFacebook />
            <FaInstagramSquare />
            <FaTwitterSquare />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <span className="text-black text-xs text-center sm:text-left">
            Copyright &copy; 2023, SekaniMall. All Rights Reserved
          </span>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-xs">
            <a className="text-black">About</a>
            <a className="ml-4 text-black">Legal</a>
            <a className="ml-4 text-black">Privacy Policy</a>
            <a className="ml-4 text-black">Advertising Preferences</a>
          </span>
        </div>
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
          <span className="text-black text-xs text-center sm:text-left ">
            Use of this Site is subject to express terms of use. By using this
            site, you signify that you agree to be bound by these Universal
            Terms of Service.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default MenuFooter;
