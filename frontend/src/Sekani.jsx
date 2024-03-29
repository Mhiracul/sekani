import React from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import MenuFooter from "./LoungeComponent/MenuFooter";
import Location from "./components/Location";
import Feedback from "./components/Feedback";
import MyChatComponent from "./components/MyChatComponent";

const Sekani = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Location />
      <Feedback />
      <MyChatComponent />
      <MenuFooter />
    </div>
  );
};

export default Sekani;
