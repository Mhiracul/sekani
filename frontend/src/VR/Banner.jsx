import React from "react";

// import components
import Users from "../VR/Users";

// import image
import Img from "../assets/img/banner-img.png";
import VR from "../assets/Sekani/VR.jpeg";

const Banner = () => {
  return (
    <section
      className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left bg-gradient-to-br from-gray-800 to-transparent  
    bg-opacity-20 rounded-md shadow-md card "
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div>
            <h1
              className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Let's Explore <br /> Three-Dimensional Visually At Sekani Games
            </h1>
            <p
              className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              doloribus inventore harum cumque blanditiis minima.
            </p>
            {/* btns */}
            <div
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button className="btn">Visit Us now</button>
              <a
                className="border-b-2 border-transparent hover:border-white transition ease-out"
                href="#"
              >
                Explore At Sekani
              </a>
            </div>
          </div>
          {/* image */}
          <div data-aos="fade-up" data-aos-delay="800" className="cup-image">
            <img src={VR} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
