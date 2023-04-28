import { useEffect, useState } from "react";
import ImgCards from "../cards";
import { shuffleCards, waait } from "../utils/helpers";
import Card from "./Card";

const Dashboard = () => {
  const [cards, setCards] = useState(shuffleCards(ImgCards));
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [turns, setTurns] = useState(0);
  console.log(cards);

  useEffect(() => {
    console.log({ firstCard, secondCard });
    console.log("did you ?????");
    if (secondCard) {
      if (firstCard.imgUrl === secondCard.imgUrl) {
        resetTurn();
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.imgUrl === firstCard.imgUrl) {
              return { ...card, matched: true };
            } else return card;
          })
        );
        console.log("you did it", firstCard.imgUrl === secondCard.imgUrl, {
          firstCard,
          secondCard,
        });
      } else {
        resetTurn();
        console.log("try again");
      }
    }
  }, [secondCard]);

  // reset function
  const resetTurn = async () => {
    await waait(1555);
    setFirstCard(null);
    setSecondCard(null);
    setTurns((prev) => prev + 1);
  };

  // handle click function
  const handleChoice = (card) => {
    console.log(card);
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  return (
    <main>
      <section className="cards-wrapper">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            choiceHandler={handleChoice}
            flipped={card === firstCard || card === secondCard || card.matched}
          />
        ))}
      </section>
    </main>
  );
};

export default Dashboard;
