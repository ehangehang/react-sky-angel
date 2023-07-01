import React from "react";
import './styles/StylesEnd.css';

function End({playHandler, playOverHandler}) {
    const name = JSON.parse(localStorage.getItem("name"));
    const score = JSON.parse(localStorage.getItem("score"));

    const buttonRestart = () => {
        console.log({...localStorage});
        localStorage.clear();
        playHandler();
        playOverHandler();
    }

    return (
        <div>
            <h1>Game over!!</h1>
            <h2>Name: {name}</h2>
            <h2>Score: {score}</h2>
            <a onClick={buttonRestart} className="eightbit-btn">Restart Game</a>
        </div>
    );
}

export default End;