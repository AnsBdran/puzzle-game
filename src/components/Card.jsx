import React from "react";

const Card = ({ card, choiceHandler, flipped }) => {
  if (flipped) {
    console.log(flipped);
  }
  return (
    <div
      className={`${flipped ? "flipped" : ""} card shadow-xl shadow-indigo-600`}
    >
      <div className="front">
        <img src={`imgs/${card.imgUrl}`} alt="card front" />
      </div>
      <div className="back">
        <img
          src="imgs/front.jpg"
          alt="card cover"
          onClick={() => choiceHandler(card)}
          disabled={true}
        />
      </div>
    </div>
  );
};

export default Card;
