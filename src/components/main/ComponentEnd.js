import React from "react";
import './styles/StylesEnd.css';
import axios from "axios";

function End({playHandler, playOverHandler}) {
    const name = JSON.parse(localStorage.getItem("name"));
    const score = JSON.parse(localStorage.getItem("score"));

    const buttonRestart = () => {
        axios.post("http://localhost:8000/api/api-data", {name, score})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
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