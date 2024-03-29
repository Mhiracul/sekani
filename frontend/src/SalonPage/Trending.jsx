import React, { useEffect, useState } from "react";

import { ImSearch } from "react-icons/im";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { femaleHairstyle } from "../data/femaledata";
import { maleHairstyle } from "../data/maledata";
function Trending() {
  const [itemsPerPages, setItemsPerPage] = useState(3);
  const [counter, setCounter] = useState(0);

  const trending = femaleHairstyle.filter(
    (hairstyle) => hairstyle.trending === true
  );
  const maletrending = maleHairstyle.filter(
    (hairstyle) => hairstyle.trending === true
  );
  const [data, setData] = useState([trending, maletrending]);
  const [over, setOver] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setOver((old) => {
        let newOver = old + 1;
        if (newOver > data.length - 1) {
          newOver = 0;
        }
        return newOver;
      });
    }, 5000);
  }, [data]);

  const pages = Math.ceil(data[over].length / itemsPerPages);
  const newArray = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPages;
    return data[over].slice(start, start + itemsPerPages);
  });
  const nextSlide = () => {
    setCounter((oldCount) => {
      let newCount = oldCount + 1;
      if (newCount > newArray.length - 1) {
        newCount = 0;
      }

      return newCount;
    });
  };
  const prevSlide = () => {
    setCounter((oldCount) => {
      let newCount = oldCount - 1;
      if (newCount < 0) {
        newCount = newArray.length - 1;
      }

      return newCount;
    });
  };
  useEffect(() => {
    if (window.innerWidth <= 999) {
      setItemsPerPage(2);
    }
    if (window.innerWidth <= 580) {
      setItemsPerPage(1);
    }
  }, [itemsPerPages]);

  return (
    <section className="trending-section bg-white  h-full ">
      <div className="trending-container relative m-auto h-full px-10 py-8">
        <h3 className="text-2xl">Trending Styles</h3>
        <div id="contents">
          <FaChevronLeft className="arrow left " onClick={prevSlide} />

          <div className="trending-contents w-full h-[64%] items-center justify-center grid grid-cols-3 gap-4">
            {newArray[counter].map(({ id, name, image }) => {
              return (
                <div
                  key={id}
                  className="trending-content overflow-hidden reltive rounded-md h-[400px] w-full content1"
                  data-aos="flip-left"
                >
                  <img
                    src={image}
                    alt="style"
                    className="w-full h-full rounded-md object-contain"
                  />
                  <div className="info right-0 bottom-o left-0 absolute flex items-center justify-between bg-black h-[90px]">
                    <h4>{name}</h4>
                    <ImSearch />
                  </div>
                </div>
              );
            })}
          </div>
          <FaChevronRight className="arrow right " onClick={nextSlide} />
        </div>
        <div className="trending-dots flex items-center justify-center p-2">
          {newArray.map((_, index) => {
            return (
              <div
                key={index}
                className={`${
                  counter === index
                    ? "dot trending-dot1 trending-active "
                    : "dot trending-dot1 w-6 h-6 rounded-full mr-3 bg-black border-4 border-gray-200 hover:bg-pink "
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Trending;
