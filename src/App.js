import './App.css';
import { useState, useContext } from 'react';
import MainMenu from './Components/MainMenu';
import { Quiz } from './Components/Quiz';
import { EndScreen } from './Components/EndScreen';

import { GameStateContext } from './Helpers/Contexts';

function App() {
  const [gameState, setGameState] = useState('menu');
  const [userName, setUserName] = useState('');
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>QuizApp</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore
        }}
      >
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'playing' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
