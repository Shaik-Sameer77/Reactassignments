import React, { useState } from 'react';
import GuessNumberForm from '../molecules/GuessNumberForm';
import './GuessNumberGame.css'

function GuessNumberGame() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  function handleGuess(e) {
    e.preventDefault();
    setCount(count + 1);
    if (Number(guess) === luckyNumber) {
      setMessage(`Congratulations! You guessed the right number in ${count} attempts.`);
      setLuckyNumber(Math.floor(Math.random() * 100) + 1);
      setCount(0);
    } else if (Number(guess) < luckyNumber) {
      setMessage(`You guessed ${guess}. Try a bigger number.`);
    } else {
      setMessage(`You guessed ${guess}. Try a smaller number.`);
    }
    setGuess('');
  }

  function handleGuessChange(e) {
    const value = e.target.value;
    if (value > 0 && value <= 100) {
      setGuess(value);
    }
  }

  return (
    <div>
      <h1>Guess the Lucky Number</h1>
      <GuessNumberForm
        guess={guess}
        onGuessChange={handleGuessChange}
        onGuessSubmit={handleGuess}
      />
      <p>{message}</p>
    </div>
  );
}

export default GuessNumberGame;