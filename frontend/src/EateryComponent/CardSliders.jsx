import React, { useState } from "react";

const CardSliders = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleCardChange = (newIndex) => {
    setCurrentCardIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="flex space-x-4 overflow-x-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${currentCardIndex === index ? "active" : ""}`}
            onClick={() => handleCardChange(index)}
          >
            <img src={card.image} alt={card.title} />
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${cards[currentCardIndex].image})` }}
      ></div>
    </div>
  );
};

export default CardSliders;
