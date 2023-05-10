import Button from "./Button";

const Header = ({
  turns,
  gameLevel,
  resetGameLevel,
  restartGame,
  matchedNumber,
  remainingNumber,
}) => {
  return (
    <header className="header md:hidden bg-sky-200 shadow-lg  px-8 py-3">
      <h1 className="font-semibold text-xl text-sky-800 text-center">
        Card Matching Puzzle
      </h1>
      <div className="flex justify-between sm:justify-around items-center mt-3 ">
        <div className="text-center">
          <p>turns: {turns}</p>
          <p>Game level: {gameLevel}</p>
          <p>Matched cards: {matchedNumber}</p>
          <p>Remaining cards: {remainingNumber}</p>
        </div>
        <div className="flex flex-col gap-2">
          <Button onClick={restartGame}>restart</Button>
          <Button onClick={resetGameLevel}>Reset game level</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
