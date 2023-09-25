import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Logo } from "../assets/Sekani/index";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [bubbles, setBubbles] = useState([]);

  const handleMouseMove = (e) => {
    const newBubbles = [];
    for (let i = 0; i < 1; i++) {
      newBubbles.push({
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 3 + 2,
        key: Date.now() + i,
        angle: Math.random() * 360,
        speed: Math.random() * 3 + 1,
      });
    }
    setBubbles([...bubbles, ...newBubbles]);
  };

  const handleMouseLeave = () => {
    setBubbles([]);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBubbles((prevBubbles) =>
        prevBubbles
          .map((bubble) => {
            const angleInRads = (bubble.angle * Math.PI) / 180;
            const x = bubble.x + Math.cos(angleInRads) * bubble.speed;
            const y = bubble.y - Math.sin(angleInRads) * bubble.speed;
            if (y < -100) {
              return null;
            }
            return {
              ...bubble,
              x,
              y,
            };
          })
          .filter(Boolean)
      );
    }, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="fixed w-full  h-[50px] flex justify-between bg-gradient bg-gradient-to-br from-gray-300 to-transparent  
    bg-opacity-20 rounded-md  card shadow-lg  z-10  items-center  font-bold cursor-pointer  text-[#03032B] px-14"
    >
      <div className="hidden md:block container">
        <img
          src={Logo}
          alt=""
          className=" w-48 h-48 mr-4 mt-2 md:items-start"
        />
      </div>

      {/* menu */}
      <nav onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <ul className="hidden md:flex gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="skills">Events</Link>
          </li>
          <li>
            <Link to="work">News</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        {bubbles.map((bubble) => (
          <div
            key={bubble.key}
            style={{
              position: "absolute",
              top: bubble.y - bubble.size / 2,
              left: bubble.x - bubble.size / 2,
              width: bubble.size,
              height: bubble.size,
              borderRadius: "50%",
              backgroundColor: "#FB320D",
              zIndex: 1,
            }}
          />
        ))}
      </nav>
      <div
        onClick={handleClick}
        className="z-10 flex justify-between w-full md:hidden"
      >
        <img src={Logo} alt="" className=" w-48 h-48 mt-2 mr-10" />
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-96 bg-[#fff] flex flex-col justify-center items-start"
        }
      >
        <Link
          to="about"
          spy="true"
          offset={800}
          duration={100}
          onClick={handleClick}
          className="px-4 py-2 lg:py-0 text-[#03032B] font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block "
        >
          About Me
        </Link>
        <Link
          to="services"
          spy="true"
          offset={50}
          duration={100}
          onClick={handleClick}
          className="px-4 py-2 lg:py-0 text-[#03032B] font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block"
        >
          What I Do
        </Link>
        <Link
          to="services"
          spy="true"
          offset={600}
          duration={100}
          onClick={handleClick}
          className="px-4 py-2 lg:py-0 text-[#03032B] font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block"
        >
          Resume
        </Link>
        <Link
          to="services"
          spy="true"
          offset={2500}
          duration={100}
          onClick={handleClick}
          className="px-4 py-2 lg:py-0 text-[#03032B] font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block"
        >
          Portfolio
        </Link>
        <Link
          to="testimonial"
          spy="true"
          offset={2500}
          duration={100}
          onClick={handleClick}
          className="px-4 py-2 lg:py-0 text-[#03032B] font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block"
        >
          Testimonial
        </Link>
        <span className="px-4"></span>
        <Link
          to="contact"
          spy="true"
          offset={2500}
          duration={100}
          onClick={handleClick}
          className="px-4 py-2 lg:py-0 text-[#03032B] font-medium hover:text-[#5100EE] cursor-pointer block lg:inline-block"
        >
          Contact Me
        </Link>
      </ul>

      {/* Social icons */}
    </div>
  );
};

export default Navbar;
