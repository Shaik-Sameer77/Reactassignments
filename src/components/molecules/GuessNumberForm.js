import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import './GuessNumberForm.css'

function GuessNumberForm({ guess, onGuessChange, onGuessSubmit }) {
  return (
    <form onSubmit={onGuessSubmit}>
      <label>
        Guess a number between 1 and 100:
        <Input type="number" value={guess} onChange={onGuessChange} />
      </label>
      <Button type="submit">Guess</Button>
    </form>
  );
}

export default GuessNumberForm;