import React from "react";
import { data } from "../../../data/data";
const MostOrdered = () => {
  return (
    <div>
      <div className="px-16">
        <h1 className="text-white font-bold text-2xl">Most Ordered Meals</h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostOrdered;
