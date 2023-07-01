import './App.css';
import React, { useState } from 'react';
import Welcome from './components/main/ComponentWelcome';
import Game from './components/main/ComponentGame';
import Cloud from './components/objects/cloud/ObjectCloud';
import End from './components/main/ComponentEnd';
import Leaderboard from './components/main/ComponentLeaderboard';

function App() {
  const [play, setPlay] = useState(false);
  const [playOver, setPlayOver] = useState(false);
  const [leaderboard, setLeaderboard] = useState(false);

  const setPlayGame = () => {
    if (play) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  }

  const setEndGame = () => {
    if (playOver) {
      setPlayOver(false);
    } else {
      setPlayOver(true);
    }
  }

  const setLeaderboardGame = () => {
    if (leaderboard) {
      setLeaderboard(false);
    } else {
      setLeaderboard(true);
    }
  }

  return (
    <>
      <div className="container-main">
        <div className="container-child">
            <Cloud/>
            {leaderboard ? <Leaderboard leaderboardHandler={setLeaderboardGame} /> 
            : <>
                {play ? 
                <>
                  {playOver ? <End playHandler={setPlayGame} playOverHandler={setEndGame} /> : <Game playOverHandler={setEndGame}/> } 
                </>
                : <Welcome playHandler={setPlayGame} leaderboardHandler={setLeaderboardGame}/>}
            </>}
        </div>
      </div>
    </>
  );
}

export default App;
