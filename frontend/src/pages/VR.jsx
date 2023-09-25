import React, { useEffect, useState } from "react";

// import components
import Banner from "../VR/Banner";
import Navbar from "../components/Navbar";
import NavMobile from "../VR/NavMobile";
import Experience from "../VR/Experience";
//import Video from "../VR/Video";
import Headsets from "../VR/Headsets";
import Testimonial from "../VR/Testimonial";
import Explore from "../VR/Explore";

// import aos (animate on scroll)
import Aos from "aos";
import "aos/dist/aos.css";
import Games from "../VR/Games";

const VR = () => {
  const [navMobile, setNavMobile] = useState(false);

  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 1500,
      delay: 400,
    });
  });

  return (
    <div className="relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex  text-white">
      <Navbar />
      <Banner />
      {/* mobile nav */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Games />
      <Headsets />

      <Testimonial />
      <Explore />
    </div>
  );
};

export default VR;
