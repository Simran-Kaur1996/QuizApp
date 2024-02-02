import React, { useState, useContext } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { GameStateContext } from '../Helpers/Contexts';

export const Quiz = () => {
  const { score, setScore, setGameState, gameState } =
    useContext(GameStateContext);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const chooseOption = (option) => {
    setOptionChosen(option);
    setSelectedOption(option);
  };

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;

        return newScore;
      });
    }

    setCurrQuestion((prevQuestion) => prevQuestion + 1);
    resetSelectedOption();
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;

        return newScore;
      });
    }

    setGameState('endScreen');
  };
  const resetSelectedOption = () => {
    setSelectedOption(null);
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button
          className={selectedOption === 'A' ? 'selectedOption' : ''}
          onClick={() => chooseOption('A')}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          className={selectedOption === 'B' ? 'selectedOption' : ''}
          onClick={() => chooseOption('B')}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          className={selectedOption === 'C' ? 'selectedOption' : ''}
          onClick={() => chooseOption('C')}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          className={selectedOption === 'D' ? 'selectedOption' : ''}
          onClick={() => chooseOption('D')}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>

      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          {' '}
          Next Question
        </button>
      )}
    </div>
  );
};
