import './App.css';
import React, { useState } from 'react';
import Welcome from './components/main/ComponentWelcome';
import Game from './components/main/ComponentGame';
import Cloud from './components/objects/cloud/ObjectCloud';
import End from './components/main/ComponentEnd';

function App() {
  const [play, setPlay] = useState(false);
  const [playOver, setPlayOver] = useState(false);

  const startGame = () => {
    setPlay(true);
  }

  const endGame = (isPlayOver) => {
    setPlayOver(isPlayOver);
  }

  return (
    <>
      <div className="container-main">
        <div className="container-child">
            <Cloud/>
            {play ? 
            <>
              {playOver ? <End/> : <Game setPlayOver={endGame}/> } 
            </>
            : <Welcome playHandler={startGame}/>}
            {/* {playOver ? <End/> : null} */}
        </div>
      </div>
    </>
  );
}

export default App;
