import { useEffect, useState } from "react";
import { shuffleCards } from "../utils/helpers";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Confetti from "react-confetti";

const Dashboard = ({ gameLevel, resetGameLevel }) => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [matchedNumber, setMatchedNumber] = useState(0);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);


  // check for card matching function
  useEffect(() => {
    if (secondCard) {
      setDisabled(true);
      if (firstCard.imgUrl === secondCard.imgUrl) {
        setMatchedNumber((prev) => prev + 2);
        setCards((prevCards) =>
          prevCards.map((card) => {
            console.log("inside set cards func");
            if (card.imgUrl === firstCard.imgUrl) {
              return { ...card, matched: true };
            } else return card;
          })
        );
        resetTurn();
      } else {
        setTimeout(resetTurn, 1000);
      }
    }
    // check if the game finished
    if (checkWinning()) {
      setGameFinished(true);
    }
  }, [secondCard]);

  useEffect(() => {
    setCards(shuffleCards(gameLevel));
    setGameFinished(false);
  }, []);

  // restart the game
  const restartGame = () => {
    setCards(shuffleCards(gameLevel));
    setGameFinished(false);
    setDisabled(false);
    setTurns(0);
    setFirstCard(null);
    setSecondCard(null);
    setMatchedNumber(0);
  };

  // check for winning function
  const checkWinning = () => {
    const isEveryCardMatched = cards.every((card) => card.matched);
    console.log("check winning ", isEveryCardMatched);
    return isEveryCardMatched;
  };

  // reset function
  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  // handle click function
  const handleChoice = (card) => {
    console.log(card);
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  return (
    <>
      {/* {startGame ? ( */}
      <>
        <section className="cards-wrapper flex-1">
          {cards &&
            cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                choiceHandler={handleChoice}
                flipped={
                  card === firstCard || card === secondCard || card.matched
                }
                disabled={disabled}
              />
            ))}
        </section>
        <Sidebar
          turns={turns}
          restartGame={restartGame}
          didYouWin={gameFinished}
          matchedNumber={matchedNumber}
          remainingNumber={cards.length - matchedNumber}
          gameLevel={gameLevel}
          resetGameLevel={resetGameLevel}
        />
      </>
      {gameFinished && <Confetti width={window.innerWidth} height={window.innerHeight}/>}
      {/* ) : ( */}
      {/* <Intro /> */}
      {/* )} */}
    </>
  );
};

export default Dashboard;
