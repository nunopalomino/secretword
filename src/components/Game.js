import './Game.css';
import { useState } from 'react';

const Game = ({
  verifyLetter,
  pickedWords,
  pickedCategory,
  letters,
  guessedLetters,
  guesses,
  score,
  wrongLetters }) => {

  const [letter, setLetter] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter('');
  }

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span></p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s)...</p>
      <div className="wordContainer">
        {letters.map((l, i) => {
          return (

            <span key={i} className="letter">
              {guessedLetters.includes(l) ? l : ""}
            </span>
          );
        })}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength={1}
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
          />
          <button  >Jogar</button>
        </form>

      </div>
      <div className="wrongLettersContainer">

        {wrongLetters.map((l, i) => {
          return (
            <>
              <p>Letras já utilizadas: </p>
              <span key={i} className="wrongLetter">
                {l}
              </span>
            </>
          );
        })}
      </div>
    </div>
  )
}

export default Game