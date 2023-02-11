//  CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Data

import { wordsList } from './data/words';

// Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'Start' },
  { id: 2, name: 'Game' },
  { id: 3, name: 'End' },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //  pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  // Starts the secret word game

  const startGame = () => {
    // pick word and pick category
    const { word, category } = pickWordAndCategory();
    setGameStage(stages[1].name);
    // create and array of letters
    let wordLetters = word.split('');

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category);
    console.log(wordLetters);

    // fill states 
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

  };

  // Process the letter input

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }

  // Restarts the game 

  const retry = () => {
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === stages[0].name && <StartScreen startGame={startGame} />}
      {gameStage === stages[1].name && <Game verifyLetter={verifyLetter} />}
      {gameStage === stages[2].name && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
