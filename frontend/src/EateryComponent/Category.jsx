import React from "react";
import { categories } from "../data/data";

const Category = () => {
  console.log(categories);
  return (
    <div className="max-w-[1640px] m-auto px-2 py-12">
      <h1 className="text-[#fb320d] font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className="grid md:grid-cols-2 grid-cols-1  lg:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
