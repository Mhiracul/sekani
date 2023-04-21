import React from "react";
import Navbar from "../EateryComponent/Navbar";
import Hero from "../EateryComponent/Hero";
import HeadlineCards from "../EateryComponent/HeadlineCards";
import Food from "../EateryComponent/Food";
import Category from "../EateryComponent/Category";

export const Eatery = () => {
  return (
    <div className="w-[100%]">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />

      <Category />
    </div>
  );
};

export default Eatery;
