import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [gameLevel, setGameLevel] = useState("intermediate");

  const startTheGame = () => {
    setStartGame(true);
  };


  const handleLevelChange = (e) => setGameLevel(e.target.value);

  const handleResetGameLevel = () => {
    setStartGame(false)
  }
  return (
    <>
      {startGame ? (
        <div className="app">
          <Header />
          <Dashboard gameLevel={gameLevel} resetGameLevel={handleResetGameLevel}/>
        </div>
      ) : (
        <Intro
          gameLevel={gameLevel}
          handleLevelChange={handleLevelChange}
          handleFormSubmit={startTheGame}
          
        />
      )}
    </>
  );
}

export default App;
