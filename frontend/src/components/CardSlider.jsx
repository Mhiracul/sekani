import React from "react";
import { data } from "../mockData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function App() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 150;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 150;
  };

  return (
    <div className="  items-center right-0 bottom-0 absolute py-2 px-3   h-96 w-96">
      <div className="flex items-center justify-center">
        <div>
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
            color="#ffffff"
          />
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
            color="#ffffff"
          />
        </div>
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <img
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-lg bg-black"
              src={item.img}
              alt="/"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
