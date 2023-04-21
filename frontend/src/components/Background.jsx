import React from "react";
import "./Background.css";
import "tailwindcss/tailwind.css";

function Background() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full ">
        <div className="perspective ">
          <div className="transform rotate-x-60 rotate-y-45 translate-x-64 translate-y-32 absolute w-48 h-48 rounded-lg bg-gradient-to-b from-purple-500 to-indigo-700 opacity-30 lift bg-3d" />
          <div className="transform rotate-x-60 rotate-y-45 translate-x-64 translate-y-32 absolute w-48 h-48 rounded-lg bg-white opacity-30 lift bg-3d bg-gradient-to-b from-purple-500 to-indigo-700" />
          <div className="transform rotate-x-60 rotate-y-45 translate-x-64 translate-y-32 absolute w-48 h-48 rounded-lg bg-white opacity-30 lift bg-gradient-to-b from-purple-500 to-indigo-700" />
          <div className="transform rotate-x-60 rotate-y-45 translate-x-64 translate-y-32 absolute w-48 h-48 rounded-lg bg-white opacity-30 lift bg-gradient-to-b from-purple-500 to-indigo-700" />
          <div className="transform rotate-x-60 rotate-y-45 translate-x-64 translate-y-32 absolute w-48 h-48 rounded-lg bg-white opacity-30 lift bg-gradient-to-b from-purple-500 to-indigo-700" />
        </div>
      </div>
    </div>
  );
}

export default Background;
