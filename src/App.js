import './App.css';
import React, { useState } from 'react';
import Welcome from './components/main/ComponentWelcome';
import Game from './components/main/ComponentGame';
import Cloud from './components/objects/cloud/ObjectCloud';
import End from './components/main/ComponentEnd';

function App() {
  const [play, setPlay] = useState(false);
  const [playOver, setPlayOver] = useState(false);

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

  return (
    <>
      <div className="container-main">
        <div className="container-child">
            <Cloud/>
            {play ? 
            <>
              {playOver ? <End playHandler={setPlayGame} playOverHandler={setEndGame} /> : <Game playOverHandler={setEndGame}/> } 
            </>
            : <Welcome playHandler={setPlayGame}/>}
            {/* {playOver ? <End/> : null} */}
        </div>
      </div>
    </>
  );
}

export default App;
