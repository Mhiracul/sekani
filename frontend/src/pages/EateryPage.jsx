import React from "react";
import Navbar from "./EateryComponent/home/Navbar";
import Hero from "./EateryComponent/home/Hero";
import HeadlineCards from "./EateryComponent/home/HeadlineCards";
import Food from "./EateryComponent/home/Food";
import Category from "./EateryComponent/home/Category";
import MostOrdered from "./EateryComponent/home/MostOrdered";

export const Eatery = () => {
  return (
    <div className="w-[100%]">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <MostOrdered />
      <Category />
    </div>
  );
};

export default Eatery;
