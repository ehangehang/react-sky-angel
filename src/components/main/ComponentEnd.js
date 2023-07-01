import React from "react";

function End() {
    const name = JSON.parse(localStorage.getItem("name"));
    const score = JSON.parse(localStorage.getItem("score"));

    return (
        <div>
            <h1>Game over!!</h1>
            <h2>{name}</h2>
            <h2>{score}</h2>
        </div>
    );
}

export default End;