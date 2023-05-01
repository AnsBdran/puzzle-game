import Button from "./Button";

const Intro = ({ handleFormSubmit, handleLevelChange, gameLevel }) => {
  const LevelOption = ({ level }) => {
    return (
      <div className="py-1">
        <input
          type="radio"
          name="gameLevel"
          id={level}
          value={level}
          onChange={handleLevelChange}
          checked={level == gameLevel}
          className="peer"
        />
        <label htmlFor={level} className="capitalize peer-checked:text-white">
          {level}
        </label>
      </div>
    );
  };

  return (
    <main className="bg-primary h-screen flex justify-center items-center text-gray-200">
      <section>
        <h1 className="text-4xl font-bold text-white mb-8">Card Memory Game</h1>
        <form onSubmit={handleFormSubmit}>
          <label className="text-xl mb-2 block">Choose the game level</label>
          <LevelOption level="easy" />
          <LevelOption level="intermediate" />
          <LevelOption level="hard" />
          <Button>Start the game</Button>
        </form>
      </section>
    </main>
  );
};

export default Intro;
