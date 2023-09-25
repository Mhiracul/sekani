import React from "react";
import Game6 from "../assets/Sekani/Game6.jpeg";
import Game7 from "../assets/Sekani/Game7.jpeg";
import Game8 from "../assets/Sekani/Game8.jpeg";
import Games9 from "../assets/Sekani/Games9.jpeg";

const Games = () => {
  return (
    <div className="py-10 shadow-lg">
      <div>
        <h1 className="text-2xl text-white font-bold text-center mb-8">
          {" "}
          Our Available PS4 & PS5 Games
        </h1>
        <div
          className="grid xl:grid-cols-4  md:grid-cols-2 gap-6 items-center  px-6"
          data-aos="fade-left"
          data-aos-offset="200"
        >
          <img src={Game6} alt="" className="rounded-md shadow-lg" />
          <img src={Game7} alt="" className="rounded-md shadow-lg" />
          <div className="bg-white md::h-[54vh] xl:h-[40vh] rounded-md shadow-lg">
            <img src={Games9} alt="" className="  py-14" />
          </div>
          <div className="bg-white md:h-[54vh] xl:h-[60vh] rounded-md shadow-lg p-6 py-6">
            <img src={Game8} alt="" className=" py-6 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
