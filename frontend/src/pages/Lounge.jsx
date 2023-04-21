import React from "react";
//import Location from "../components/Location";
import Navbar from "../components/Navbar";
import AboutLounge from "../LoungeComponent/AboutLounge";
//import HeroSection from "../LoungeComponent/HeroSection";
import HeroSectionSlide from "../LoungeComponent/HeroSectionSlide";
import MenuFooter from "../LoungeComponent/MenuFooter";
import UpcomingEvents from "../LoungeComponent/UpcomingEvents";

const Lounge = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionSlide />
      <AboutLounge />
      <UpcomingEvents />
      <MenuFooter />
    </div>
  );
};

export default Lounge;
