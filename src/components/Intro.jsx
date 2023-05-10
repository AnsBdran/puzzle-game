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
          className="peer cursor-pointer"
        />
        <label
          htmlFor={level}
          className="capitalize text-slate-500 hover:text-slate-600 peer-checked:text-slate-700 cursor-pointer"
        >
          {level}
        </label>
      </div>
    );
  };

  return (
    <main className="h-screen flex justify-center items-center px-2">
      <section>
        <h1 className="text-4xl font-bold mb-8 text-center">
          Card Memory Game
        </h1>
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
