import React from "react";

const GlassCard = ({ children }) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl">
      {children}
    </div>
  );
};

export default GlassCard;
