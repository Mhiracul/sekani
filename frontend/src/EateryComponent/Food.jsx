import React, { useState } from "react";
import { data } from "../data/data.js";
import { useSelector } from "react-redux";
import HomeCard from "./HomeCard.jsx";

//import { AiOutlinePlusSquare } from "react-icons/ai";
import "./style.css";
import { TbCurrencyNaira } from "react-icons/tb";
const Food = () => {
  //   console.log(data);
  const loadingArray = new Array(4).fill(null);

  //   Filter Type burgers/pizza/etc

  const productData = useSelector((state) => state.product.productList);
  const [category, setCategory] = useState("all");

  // Filter by category
  const filterCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const homeProductCartList = productData.filter((product, index, self) => {
    if (category === "all") {
      return true;
    }
    return (
      product.category === category &&
      index === self.findIndex((p) => p._id === product._id)
    );
  });

  //   Filter by price

  //const [cart, setCart] = useState([]);
  //const addToCart = (item) => {
  //setCart([...cart, item]);
  //};

  return (
    <div className="max-w-[1640px] m-auto px-8 py-12 w-full">
      <h1 className="text-black font-bold text-3xl  md:text-left py-2">
        Nearby Delicies
      </h1>
      <p className="font-bold text-gray-700 text-left ">Categories</p>

      {/* Filter Row */}
      <div className="flex flex-col mx-auto  justify-center max-w-sm">
        {/* Fliter Type */}
        <div>
          <div className="flex flex-row gap-4 overflow-y-auto p-4 font-[quicksand] font-[600] border-none">
            <button
              onClick={() => filterCategory("all")}
              className="m-1 bg-[#F0EECE] text-black  rounded-full px-2 hover:bg-orange-600 hover:text-white outline-none font-[quicksand] font-[600]"
            >
              All
            </button>
            <button
              onClick={() => setCategory("fruits")}
              className="m-1 bg-[#B2D1A9] text-black  rounded-full px-2 hover:bg-orange-600 hover:text-white"
            >
              Fruits
            </button>

            <button
              onClick={() => filterCategory("pizza")}
              className="m-1 bg-[#E77766] text-black  rounded-full px-2 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterCategory("salad")}
              className="m-1 bg-[#ECBF76] text-black  rounded-full px-2 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterCategory("chicken")}
              className="m-1 bg-[#ECBF76] text-black  rounded-full px-2 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
      </div>

      {/* Display foods */}
      <div className="flex flex-col mx-auto  justify-center max-w-sm pt-4">
        <div className="flex flex-row gap-4 overflow-y-auto">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index} loading={"Loading.."} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Food;
