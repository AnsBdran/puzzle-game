import React from 'react';
import Button from './Button';

const Sidebar = ({
  turns,
  restartGame,
  didYouWin,
  matchedNumber,
  remainingNumber,
  gameLevel,
  resetGameLevel,
}) => {
  console.log('did you win?', didYouWin);
  return (
    <section className='sidebar hidden md:block px-2 lg:px-4 xl:px-8 pt-24 min-h-screen shadow-2xl'>
      <h2 className='text-xl lg:text-2xl xl:text-3xl font-bold bg-neutral-700 text-sky-50 text-center py-3 px-4 rounded'>
        Card Matching Puzzle
      </h2>
      <div className='text-center lg:text-lg xl:text-xl capitalize mt-4 px-2 lg:px-6 py-8 rounded bg-neutral-200 border-2 border-neutral-300 flex flex-col gap-8'>
        <StatItem title='Turns' value={turns} />
        <StatItem title='Matched cards' value={matchedNumber} />
        <StatItem title='Remaining cards' value={remainingNumber} />
        <StatItem title='Game level' value={gameLevel} />
      </div>
      <div className='flex flex-col gap-3 mt-4'>
        <Button onClick={restartGame}>
          {didYouWin ? 'Start a new' : 'Restart the'} game
        </Button>
        <Button onClick={resetGameLevel}>Reset game level</Button>
      </div>
      <footer className='text-center mt-8 text-gray-300'></footer>
    </section>
  );
};

const StatItem = ({ title, value }) => (
  <p>
    <span className='text-neutral-600'> {title}:</span>{' '}
    <span className='text-neutral-800 font-bold'> {value}</span>
  </p>
);
export default Sidebar;
