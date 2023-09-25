import React, { useState } from "react";
import { MdFoodBank } from "react-icons/md";
import Premiumm from "../../../assets/Sekani/Premiumm.jpeg";
const HeroSection = () => {
  return (
    <div
      className="h-96 bg-cover bg-center  max-w-[1640px] mx-auto "
      style={{ backgroundImage: `url(${Premiumm})` }}
    >
      <div
        className=" mt-2  py-40 flex flex-col items-center justify-center mx-auto bg-gradient bg-gradient-to-br from-gray-400 to-transparent  
            bg-opacity-20 rounded-md shadow-md card"
      >
        <h1 className="font-bold lg:text-5xl md:text-4xl text-2xl text-[#000000]  ">
          WELCOME TO SEKANI EATERY
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Cooking is Love Made Visible
        </p>
        <div
          className="bg-gradient bg-gradient-to-br from-gray-200 to-transparent mt-3
            bg-opacity-20  shadow-md card rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]"
        >
          <MdFoodBank size={25} color="#fb320d" />
          <input
            className="bg-transparent p-2 w-full focus:outline-none"
            type="text"
            placeholder="Search foods"
          />
        </div>
      </div>
      <div></div>
      <div className="container mx-auto px-4 ">
        <div className="max-w-3xl mx-auto mb-8"></div>
      </div>
    </div>
  );
};

export default HeroSection;
