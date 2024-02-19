import React, { useState } from 'react';

const NumberGuess = () => {
  // State variables
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [targetNumber] = useState(Math.floor(Math.random() * 100) + 1);

  // Function to handle user input
  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  // Function to handle user's guess
  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      setFeedback('Please enter a valid number between 1 and 100.');
    } else {
      setAttempts(attempts + 1);
      if (userGuess === targetNumber) {
        setFeedback(`Congratulations! You guessed the number ${targetNumber} correctly in ${attempts + 1} attempts.`);
      } else if (userGuess < targetNumber) {
        setFeedback('Too low! Try a higher number.');
      } else {
        setFeedback('Too high! Try a lower number.');
      }
    }
    setGuess('');
  };

  return (
    <div>
         <h1 className="font-medium text-4xl ml-[500px] mt-10">OOPS!! You are offline</h1>
         <h1 className="font-medium text-4xl ml-[350px] mt-2">Dont't worry, till then enjoy the game😉</h1>
      <h2 className="font-medium text-4xl ml-[500px] mt-10">Number Guessing Game</h2>
      <p className="font-normal text-lg ml-10 mt-10">Guess a number between 1 and 100:</p>

  <div className="flex ">
  <input className="p-3 flex space-x-1 w-[500px] h-[50px] mt-3 ml-3 rounded-lg m-1"
        type="text"
        value={guess}
        onChange={handleChange}
        placeholder="Enter your guess"
      />
      <button className="m-1 mt-3 ml-3 h-[50px] w-[100px] cursor-pointer bg-gray-300 rounded-lg text-lg hover:bg-gray-200" onClick={handleGuess}>Guess</button>
  </div>
    
      <p  className="font-normal text-lg ml-10 mt-2">{feedback}</p>
    </div>
  );
};
export default NumberGuess;