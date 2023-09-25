import React, { useEffect } from "react";
import Slider from "react-slick";
import {
  Bryan,
  food,
  haircut,
  lounge,
  VR,
  Woobles4,
  bryank,
  Woobles2,
} from "../assets/Sekani/index";
import Yoka from "../assets/Sekani/Yoka.jpeg";
import { Link } from "react-router-dom";
import RainMorphism from "./RainMorphism";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import AOS from "aos";
import "aos/dist/aos.css";

SwiperCore.use([Navigation, Pagination]);

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 1000, delay: 200 });
  }, []);

  return (
    <div
      className="bg-gradient bg-gradient-to-br from-gray-300 to-transparent  
    bg-opacity-20 rounded-md shadow-md card "
    >
      <div className="p-6">
        <RainMorphism />
      </div>
      <div className="max-w-[1200px] mx-auto py-16 px-6">
        <h1 className="text-[#FB320D] text-4xl font-bold text-center mb-6">
          OUR BUSINESS OUTLETS
        </h1>

        <Slider {...settings} className="md:grid-cols-1 md:grid">
          <SwiperSlide>
            <div
              className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
              data-aos="fade-up"
            >
              <img className="w-50 mx-auto" src={lounge} alt="/" />

              <div className="text-center font-medium py-6 ">
                <h1 className="font-bold text-[#FB320D] md:text-2xl sm:text-4xl text-2xl py-6">
                  Lounge
                </h1>
                <p className="text-gray-400 font-normal text-sm text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, suscipit!
                </p>
                <Link to="/lounge">
                  <button className="w-[200px] border-2 rounded-full hover:text-[#FB320D] hover:border-[#03032B] border-[#FB320D] font-medium mx-auto px-4 py-2 mt-2">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
              data-aos="fade-left"
            >
              <img
                className="w-full mx-auto  bg-transparent "
                src={Woobles2}
                alt="/"
              />

              <div className="text-center font-medium bg-white py-6">
                <h1 className="font-bold text-[#FB320D] md:text-2xl sm:text-4xl text-2xl py-6">
                  Woobles
                </h1>
                <p className="text-gray-400 font-normal text-sm text-center">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, suscipit!
                </p>
                <Link to="/eatery">
                  <button className=" w-[200px]  border-2 rounded-full hover:text-[#FB320D] hover:border-[#03032B] border-[#FB320D] font-medium  mx-auto px-4 py-2 mt-2">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide data-aos="fade-up">
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
              <img className="w-full mx-auto  bg-white" src={bryank} alt="/" />

              <div className="text-center font-medium bg-[#add8e6] py-6 ">
                <h1 className="font-bold text-[#FB320D] md:text-2xl sm:text-4xl text-2xl py-6">
                  Bryan Kay Luxury
                </h1>
                <p className="text-gray-400 font-normal text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, labore.
                </p>
                <Link to="/eatery">
                  <button className=" w-[200px]  border-2 rounded-full hover:text-[#FB320D] hover:border-[#03032B] border-[#FB320D] font-medium  mx-auto px-4 py-2 mt-2">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
              <img className="w-50 mx-auto  bg-white" src={VR} alt="/" />

              <div className="text-center font-medium bg-[#add8e6] py-6 ">
                <h1 className="font-bold text-[#FB320D] md:text-2xl sm:text-4xl text-2xl py-6">
                  Visual Reality
                </h1>
                <p className="text-gray-400 font-normal text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, labore.
                </p>
                <Link to="/vr">
                  <button className=" w-[200px]  border-2 rounded-full hover:text-[#FB320D] hover:border-[#03032B] border-[#FB320D] font-medium  mx-auto px-4 py-2 mt-2">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
              <img className="w-50 mx-auto  bg-white" src={food} alt="/" />

              <div className="text-center font-medium bg-[#add8e6] py-6 ">
                <h1 className="font-bold text-[#FB320D] md:text-2xl sm:text-4xl text-2xl py-6">
                  Eatery
                </h1>
                <p className="text-gray-400 font-normal text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, labore.
                </p>
                <Link to="/eatery">
                  <button className=" w-[200px]  border-2 rounded-full hover:text-[#FB320D] hover:border-[#03032B] border-[#FB320D] font-medium  mx-auto px-4 py-2 mt-2">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
              <img className="w-50 mx-auto  bg-white" src={haircut} alt="/" />

              <div className="text-center font-medium bg-[#add8e6] py-6 ">
                <h1 className="font-bold text-[#FB320D] md:text-2xl sm:text-4xl text-2xl py-6">
                  Salon
                </h1>
                <p className="text-gray-400 font-normal text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, labore.
                </p>
                <Link to="/salon">
                  <button className=" w-[200px]  border-2 rounded-full hover:text-[#FB320D] hover:border-[#03032B] border-[#FB320D] font-medium  mx-auto px-4 py-2 mt-2">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
              <img className="w-50 mx-auto  bg-white" src={Yoka} alt="/" />

              <div className="text-center font-medium bg-[#add8e6] py-6 ">
                <h1 className="font-bold text-[#FB320D] md:text-2xl sm:text-4xl text-2xl py-6">
                  Yoka Logistics
                </h1>
                <p className="text-gray-400 font-normal text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, labore.
                </p>
                <Link to="/yoka">
                  <button className=" w-[200px]  border-2 rounded-full hover:text-[#FB320D] hover:border-[#03032B] border-[#FB320D] font-medium  mx-auto px-4 py-2 mt-2">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Slider>
      </div>
    </div>
  );
};

export default Services;
