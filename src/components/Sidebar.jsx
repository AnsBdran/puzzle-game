import React from "react";

const Sidebar = ({ turns, restartGame, didYouWin }) => {
  console.log('did you win?', didYouWin)
  return (
    <section className="sidebar">
      sidebar
      <div>
        <p>turns: {turns}</p>
      </div>
      <div>
        <button onClick={restartGame}>restart the game</button>
      </div>
      {didYouWin && <p>congrats</p> }
    </section>
  );
};

export default Sidebar;
