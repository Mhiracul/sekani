import React from "react";
import HairstylesInfo from "./HairstylesInfo";
import Hero from "./Hero";

//import Sidebar from "../components/Sidebar";
import { heroimages } from "../data/femaledata";
import Navbar from "./Navbar";

const Hairstyles = () => {
  return (
    <>
      <Navbar />
      <section className="hair-page">
        <div className="hair-container">
          <Hero image={heroimages} title="Explore" />
          <HairstylesInfo />
        </div>
      </section>
    </>
  );
};

export default Hairstyles;
