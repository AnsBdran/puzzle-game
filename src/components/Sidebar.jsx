import React from "react";
import Button from "./Button";

const Sidebar = ({
  turns,
  restartGame,
  didYouWin,
  matchedNumber,
  remainingNumber,
  gameLevel,
  resetGameLevel
}) => {
  console.log("did you win?", didYouWin);
  return (
    <section className="sidebar hidden md:block px-2 lg:px-4 xl:px-8 py-24 bg-primary min-h-screen">
      <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold bg-secondary text-gray-800 text-center py-3 px-4 rounded">
        Card Matching Puzzle
      </h2>
      <div className="text-center text-lg lg:text-xl capitalize mt-4 px-2 lg:px-6 py-8 rounded bg-secondary text-gray-600 flex flex-col gap-8">
        <p>turns: {turns}</p>
        <p>Cards Matched: {matchedNumber}</p>
        <p>Remaining cards to match: {remainingNumber} </p>
        <p>Game Level: {gameLevel}</p>
      </div>
      <div>
        <Button onClick={restartGame}>{didYouWin ? "Start a new" : "Restart the" } game</Button>
        <Button onClick={resetGameLevel}>Reset game level</Button>
      </div>
      <footer className="text-center mt-12 text-gray-300">
        <p>Made by: Anas Badran</p>
      </footer>
    </section>
  );
};

export default Sidebar;
