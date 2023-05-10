import React from 'react';

const Card = ({ card, choiceHandler, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) choiceHandler(card);
  };
  return (
    <div className={`${flipped ? 'flipped' : ''} card`}>
      <div className='back h-full'>
        <img
          src='imgs/cover.jpg'
          alt='card cover'
          onClick={handleClick}
          disabled={true}
          className='w-full h-full '
        />
      </div>
      <div className='front'>
        <img src={`imgs/${card.imgUrl}`} alt='card front' />
      </div>
    </div>
  );
};

export default Card;
