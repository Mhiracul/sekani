import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section
      className="bg-gray-800 text-gray-100"
      style={{
        background:
          "url(https://images.unsplash.com/photo-1623955609272-586f5b842a3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bnVkZWFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60)",
        backgroundRepeat: "",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        minHeight: "89vh",
      }}
    >
      <div className="justify-center py-60">
        <div className="  flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Lounge</h1>
          <p className="text-xl mb-8">Relax, Unwind, and Enjoy</p>
          <Link to={"/menupage"}>
            <button className="bg-[#FB320D] text-white px-6 py-3 rounded-full shadow-lg uppercase tracking-wide font-bold hover:bg-gray-300 outline-none">
              View Menu
            </button>{" "}
          </Link>{" "}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
