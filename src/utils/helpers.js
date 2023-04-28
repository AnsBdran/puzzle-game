export const shuffleCards = (cards) => {
  return [...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ id: Math.random(), ...card, matched: false }));
};

// export const waiit = () => {
//   setTimeout(() => {
//     console.log("waiitedd");
//   }, 1500);
// };

export const waait = (time) =>
  new Promise((resolve) => setTimeout(resolve, time));
