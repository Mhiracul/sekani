import React from "react";

const RainMorphism = () => {
  return (
    <div
      className="relative bg-gradient bg-gradient-to-br from-gray-300 to-transparent  
    bg-opacity-20 rounded-md shadow-md card spin"
    >
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute top-0 left-0 w-32 h-32 bbg-gradient bg-gradient-to-br from-gray-300 to-transparent  
          bg-opacity-20 rounded-full shadow-md card animate-rain-drop1 spin"
          style={{ animation: "spin 2s linear infinite" }}
        ></div>
      </div>
    </div>
  );
};

export default RainMorphism;
