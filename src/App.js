import './App.css';
import React, { useState } from 'react';
import Welcome from './components/main/ComponentWelcome';
import Game from './components/main/ComponentGame';
import Cloud from './components/objects/cloud/ObjectCloud';

function App() {
  const [play, setPlay] = useState(false);

  const startGame = () => {
    setPlay(true);
  }

  return (
    <>
      <div className="container-main">
        <div className="container-child">
            <Cloud/>
            {play ? <Game/> : <Welcome playHandler={startGame}/>}
        </div>
      </div>
    </>
  );
}

export default App;
