import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CardSlider from "./CardSlider";
import Sekani from "../assets/Sekani/Sekani.jpeg";
import {
  FaAccessibleIcon,
  FaAccusoft,
  FaAd,
  FaAirFreshener,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="h-full relative">
      {/* Rest of the content */}
      <div>
        <div
          className="h-screen bg-cover bg-no-repeat bg-center "
          style={{ backgroundImage: `url(${Sekani})` }}
        >
          <div
            className="h-full bg-gradient bg-gradient-to-br from-gray-800 to-transparent  
            bg-opacity-20 rounded-md shadow-md card  justify-center px-14 "
            data-aos="fade-up"
          >
            <div className="px-14 py-40">
              <h1 className="text-4xl font-bold text-white container ">
                Welcome to Sekani Mall
              </h1>
              <p className="max-w-md text-gray-300 mt-4 text-[12px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                harum totam a deserunt porro quas magnam ipsam voluptatibus in
                reprehenderit.
              </p>
              <button className="text-white bg-[#FB320D] px-12 py-2 mt-2 rounded-md text-[13px]">
                VIEW MORE
              </button>
            </div>
            <div className="absolute bottom-0 right-0 p-8 px-28">
              <CardSlider />
            </div>{" "}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 py-4 flex gap-5 text-white container px-28 ">
          <FaTwitter size={20} className="hover:text-[#2cbeef]" />
          <FaFacebookSquare size={20} className="hover:text-[#03032B]" />
          <FaInstagramSquare
            size={20}
            className="hover:text-[bg-gradient-to-r from-yellow-300 via-orange-500 to-blue-600]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
