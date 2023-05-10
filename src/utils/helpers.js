import cardImgs from '../cards';

export const shuffleCards = (gameLevel) => {
  const { cardsNumber } = getGameInfo(gameLevel);
  const cards = cardImgs.slice(0, cardsNumber);
  console.log('cards number', cardsNumber, cards);
  return [...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ id: Math.random(), ...card, matched: false }));
};

export const getGameInfo = (gameLevel) => {
  let cardsNumber;
  let wrapperClass;
  switch (gameLevel) {
    case 'easy':
      cardsNumber = 6;
      wrapperClass = 'easy';
      break;
    case 'intermediate':
      cardsNumber = 8;
      wrapperClass = 'intermediate';
      break;
    case 'hard':
      cardsNumber = 10;
      wrapperClass = 'hard';
      break;
    default:
      cardsNumber = 6;
      wrapperClass = 'easy';
  }
  return { cardsNumber, wrapperClass };
};
