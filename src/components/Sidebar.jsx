import React from "react";
import Button from "./Button";

const Sidebar = ({
  turns,
  restartGame,
  didYouWin,
  matchedNumber,
  remainingNumber,
  gameLevel,
  resetGameLevel,
}) => {
  console.log("did you win?", didYouWin);
  return (
    <section className="sidebar hidden md:block px-2 lg:px-4 xl:px-8 pt-24 bg-primary min-h-screen">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold bg-sky-200 text-sky-950 text-center py-3 px-4 rounded">
        Card Matching Puzzle
      </h2>
      <div className="text-center lg:text-lg xl:text-xl capitalize mt-4 px-2 lg:px-6 py-8 rounded bg-sky-50 text-sky-600 flex flex-col gap-8">
        <p>
          turns: <span className="text-sky-800">{turns}</span>
        </p>
        <p>
          Cards Matched: <span className="text-sky-800"> {matchedNumber}</span>
        </p>
        <p>
          Remaining cards to match:{" "}
          <span className="text-sky-800"> {remainingNumber}</span>{" "}
        </p>
        <p>
          Game Level: <span className="text-sky-800"> {gameLevel}</span>
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <Button onClick={restartGame}>
          {didYouWin ? "Start a new" : "Restart the"} game
        </Button>
        <Button onClick={resetGameLevel}>Reset game level</Button>
      </div>
      <footer className="text-center mt-8 text-gray-300"></footer>
    </section>
  );
};

export default Sidebar;
