import React from "react";

const Card = ({ card, choiceHandler, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) choiceHandler(card);
  };
  return (
    <div className={`${flipped ? "flipped" : ""} card`}>
      <div className="back">
        <img
          src="imgs/cover.png"
          alt="card cover"
          onClick={handleClick}
          disabled={true}
        />
      </div>
      <div className="front">
        <img src={`imgs/${card.imgUrl}`} alt="card front" />
      </div>
    </div>
  );
};

export default Card;
