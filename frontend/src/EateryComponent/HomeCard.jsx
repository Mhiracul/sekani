import React, { useState } from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/productSlice";
import "swiper/swiper-bundle.css";

const HomeCard = ({ name, image, category, price, loading, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const handleAddCartProduct = (e) => {
    dispatch(
      addCartItem({
        _id: id,
        name: name,
        price: price,
        category: category,
        image: image,
      })
    );
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 3700);
    }
  };

  return (
    <div>
      <div className="pt-4 max-w-[1640px] m-auto  py-12 ">
        {name ? (
          <>
            <div
              key={id}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300 w-full bg-[#2cbeef]"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-[290px] rounded-t-lg object-cover  bg-center"
              />
              <div className="h-24">
                <div className="flex justify-between px-2 py-2">
                  <p className="font-bold text-sm">{name}</p>
                  <p>
                    <span className=" text-black font-bold p-1 rounded-full flex items-center">
                      <TbCurrencyNaira size={20} />
                      {price}
                    </span>
                  </p>
                </div>
                <div className="flex items-center p-2 w-full">
                  <button
                    className={`button hover:bg-[] rounded-full  ${
                      isLoading ? "loading" : ""
                    }`}
                    onClick={handleClick}
                  >
                    <span onClick={handleAddCartProduct}>Add to cart</span>
                    <div className="cart">
                      <svg viewBox="0 0 36 26">
                        <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                        <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-full">
            <p>{loading}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCard;
