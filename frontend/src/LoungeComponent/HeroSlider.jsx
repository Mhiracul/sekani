import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cocktail from "../assets/Sekani/cocktail.jpg";
import chicken from "../assets/Sekani/chicken.jpg";
import milkshakes from "../assets/Sekani/milkshakes.jpg";
import ice from "../assets/Sekani/ice.jpg";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Slider {...settings} className="h-[80vh] py-14">
      <div className="relative h-[80vh]">
        <img src={cocktail} alt="" className="w-full h-full object-cover " />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Delicious Cocktails</h1>
          <p className="text-xl">Try our mouth-watering Cocktails</p>
        </div>
      </div>

      <div className=" h-[80vh] relative">
        <img src={chicken} alt="" className="w-full h-full object-cover " />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">
            Handcrafted Chicken and Chips
          </h1>
          <p className="text-xl">
            Enjoy our wood-fired chicken and chips with a variety of toppings
          </p>
        </div>
      </div>
      <div className=" h-[80vh] relative">
        <img src={milkshakes} alt="" className="w-full h-full object-cover " />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Satisfying MilkShakes</h1>
          <p className="text-xl">
            Try our classic milkshakes made with premium fruits
          </p>
        </div>
      </div>
      <div className=" h-[80vh] relative">
        <img src={ice} alt="" className="w-full h-full object-cover " />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Satisfying MilkShakes</h1>
          <p className="text-xl">
            Try our classic milkshakes made with premium fruits
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default HeroSlider;
