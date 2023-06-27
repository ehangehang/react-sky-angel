import './App.css';
import React from 'react';
import Welcome from './components/main/ComponentWelcome';
import Cloud from './components/objects/cloud/ObjectCloud';

function App() {
  return (
    <>
      <div className="container-main">
        <div className="container-child">
            <Welcome/>
            <Cloud/>
        </div>
      </div>
    </>
  );
}

export default App;
