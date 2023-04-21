import React from "react";

const Droplet = ({ x, y }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        borderRadius: "50%",
        backgroundColor: "blue",
        width: "20px",
        height: "20px",
        transition: "all 0.3s ease",
        transform: "scale(0)",
        pointerEvents: "none",
      }}
    ></div>
  );
};

export default Droplet;
