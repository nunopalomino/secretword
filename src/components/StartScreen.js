import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>
        Secret Word
      </h1>
      <p>Click the start button to start playing</p>
      <button onClick={startGame}>Start</button>
    </div>
  )
}

export default StartScreen