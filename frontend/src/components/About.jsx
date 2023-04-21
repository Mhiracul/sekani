import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { bryank, Games, UltraGadgets, Woobles } from "../assets/Sekani/index";
import RainMorphism from "./RainMorphism";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className=" py-16 px-0 container">
      <div>
        <div>
          <RainMorphism />
          <h1 className="text-[#03032B] md:text-center font-bold text-4xl text-center">
            ABOUT SEKANI
          </h1>

          <div
            className="py-16 px-20 mx-auto flex justify-center items-center w-full"
            data-aos="fade-up"
          >
            <RainMorphism />
            <div
              className="py-16 px-6 xl:flex-row flex md:flex-col flex-col xl:gap-0 md:gap-4 gap-4 "
              data-aos="fade-right"
            >
              <div
                className="bg-[#03032B] bg-gradient bg-gradient-to-br from-gray-300 to-transparent  
    bg-opacity-20 rounded-md shadow-md card px-6 py-10"
              >
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corporis provident odit ab aut, quasi architecto obcaecati
                  laboriosam iusto quibusdam praesentium unde aperiam culpa
                  laudantium consectetur ullam distinctio voluptatibus tenetur
                  recusandae laborum voluptas nemo molestiae. Nihil iusto
                  deleniti voluptates cupiditate corporis.
                </p>
                <div
                  className="grid grid-cols-6 mt-2"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div>
                    <img
                      src={UltraGadgets}
                      alt=""
                      className="rounded-full w-12 h-12 border border-[#FB320D] "
                    />
                  </div>
                  <div>
                    <img
                      src={Woobles}
                      alt=""
                      className="rounded-full w-12 h-12 border border-[#FB320D] "
                    />
                  </div>
                  <div>
                    <img
                      src={bryank}
                      alt=""
                      className="rounded-full w-12 h-12 border border-[#FB320D] "
                    />
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" data-aos-delay="400">
                <img src={Games} alt="" className=" object-cover " />
              </div>
              <RainMorphism />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
