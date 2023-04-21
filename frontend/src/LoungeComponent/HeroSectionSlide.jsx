import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import loungepic from "../assets/Sekani/loungepic.jpg";
import loungepic1 from "../assets/Sekani/loungepic1.jpg";
import loungepic2 from "../assets/Sekani/loungepic2.jpg";
import styled from "styled-components";

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  );
`;
const HeroSectionSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="h-[80vh]">
      <div className=" text-gray-100 relative h-[80vh]">
        <img src={loungepic1} alt="" className="w-full h-full object-cover" />
        <GradientOverlay />
        <div className="justify-center py-60">
          <div className="absolute inset-0  flex flex-col items-center text-center justify-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to the Sekani Lounge
            </h1>
            <p className="text-xl mb-8 text-[#FB320D]">
              Relax, Unwind, and Enjoy
            </p>
            <Link to={"/menupage"}>
              <button className="bg-[#FB320D] text-white px-6 py-3 rounded-full shadow-lg uppercase tracking-wide font-bold hover:bg-gray-300 outline-none">
                View Menu
              </button>{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className=" text-gray-100 relative h-[80vh]">
        <img src={loungepic} alt="" className="w-full h-full object-cover" />
        <GradientOverlay />
        <div className="justify-center py-60">
          <div className="absolute inset-0  flex flex-col items-center text-center justify-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to the Sekani Lounge
            </h1>
            <p className="text-xl mb-8">Relax, Unwind, and Enjoy</p>
            <Link to={"/menupage"}>
              <button className="bg-[#FB320D] text-white px-6 py-3 rounded-full shadow-lg uppercase tracking-wide font-bold hover:bg-gray-300 outline-none">
                View Menu
              </button>{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
      <div className=" text-gray-100 relative h-[80vh]">
        <img src={loungepic2} alt="" className="w-full h-full object-cover" />
        <div className="justify-center py-60">
          <div className="absolute inset-0  flex flex-col items-center text-center justify-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to the Sekani Lounge
            </h1>
            <p className="text-xl mb-8">Relax, Unwind, and Enjoy</p>
            <Link to={"/menupage"}>
              <button className="bg-[#FB320D] text-white px-6 py-3 rounded-full shadow-lg uppercase tracking-wide font-bold hover:bg-gray-300 outline-none">
                View Menu
              </button>{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HeroSectionSlide;
