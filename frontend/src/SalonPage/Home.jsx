import React, { useEffect } from "react";
import Blog from "./Blog";
import Hero from "./Hero";
import Reviews from "./Reviews";
import Trending from "./Trending";

import Aos from "aos";
import "aos/dist/aos.css";
import { heroimages } from "../data/femaledata";
import Navbar from "../components/Navbar";
function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <section className="home-page w-screen">
        <div className="home-container">
          <Hero image={heroimages} title="View Styles" />
          <Trending />
          <Blog />
          <Reviews />
        </div>
      </section>
    </>
  );
}

export default Home;
