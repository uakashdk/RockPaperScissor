import React, { useState } from 'react';
import './Game.css'
const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['rock', 'paper', 'scissors'];

  const handleChoice = (choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerRandomChoice);
    setResult(getResult(choice, computerRandomChoice));
  };

  const getResult = (player, computer) => {
    if (player === computer) {
      return 'It\'s a tie!';
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  };

  return (
    <div className='container'>
      <h1>WELCOME TO ROCK PAPPER SCISSOR GAME</h1>
      <div className='center-container'>
        <button onClick={() => handleChoice('rock')}>Rock</button>
        <button onClick={() => handleChoice('paper')}>Paper</button>
        <button onClick={() => handleChoice('scissors')}>Scissors</button>
      </div>
      {playerChoice && computerChoice && (
        <div className='para-container'>
          <p>You chose: {playerChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
};

export default Game;
