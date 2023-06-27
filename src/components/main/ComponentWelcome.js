import './styles/StylesWelcome.css';
import React from "react";

function Welcome({playHandler}) {
    return (
        <div className="child-body">
            <h1>
                Sky Angel
            </h1>
            <p>Avoid the birds to score!</p>
            <button onClick={playHandler}>Start Game</button>
        </div>
    );
}

export default Welcome;