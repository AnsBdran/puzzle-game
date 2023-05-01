import cardImgs from "../cards";

export const shuffleCards = (gameLevel) => {
  const cardsNumber = calcCardsNumber(gameLevel);
  const cards = cardImgs.slice(0, cardsNumber);
  console.log("cards number", cardsNumber, cards);
  return [...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ id: Math.random(), ...card, matched: false }));
};

// export const waiit = () => {
//   setTimeout(() => {
//     console.log("waiitedd");
//   }, 1500);
// };

// export const waait = (time) =>
//   new Promise((resolve) => setTimeout(resolve, time));

export const calcCardsNumber = (gameLevel) => {
  let cardsNumber;
  switch (gameLevel) {
    case "easy":
      cardsNumber = 5;
      break;
    case "intermediate":
      cardsNumber = 7;
      break;
    case "hard":
      cardsNumber = 10;
      break;
    default:
      cardsNumber = 7;
  }
  return cardsNumber;
};
