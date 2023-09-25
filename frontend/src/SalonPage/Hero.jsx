import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero({ image, title }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter((oldCount) => {
        let newCount = oldCount + 1;
        if (newCount > image.length - 1) {
          newCount = 0;
        }
        return newCount;
      });
    }, 5000);
  }, [counter]);
  return (
    <section className="hero-section overflow-hidden  bg-gradient-to-b from-[#FC7BE9] to-gray-200">
      <div className="hero-container m-auto h-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center w-full px-20">
        <div className="hero-info" data-aos="fade-right">
          <h2 className="text-5xl">Sekani Unisex Salon</h2>
          <p className="text-sm max-w-sm mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea illo
            debitis vitae vel velit? Similique, distinctio recusandae aliquid
            eveniet consequuntur omnis doloremque. Quo, at corporis maiores et
            illo ea itaque?
          </p>
          <button className="hero-btn p-2 px-8 bg-blue-500 text-white rounded-md mt-2">
            {title === "View Styles" ? (
              <Link to="/hair">{title}</Link>
            ) : (
              <a href="#hairstyles">{title}</a>
            )}
          </button>
        </div>
        <div
          className="img-container h-[600px] aspect-[1] rounded-full border-[16px] border-blue-500 "
          data-aos="fade-left"
        >
          <img
            src={image[counter]}
            alt="Beauty Hairs"
            className="hero1 absolute w-full rounded-full object-cover h-[600px]"
          />
        </div>
      </div>
      <div className="dots flex justify-center items-center">
        {image.map((_, index) => {
          return (
            <div
              key={index}
              className={` bg-black${
                counter === index
                  ? "active-hero-dot w-6 h-6 rounded-full bg-[#b49804] m-3 border-[5px] border-gray-50"
                  : null
              }`}
            ></div>
          );
        })}
      </div>
    </section>
  );
}

export default Hero;
