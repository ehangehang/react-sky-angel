import './styles/StylesWelcome.css';
import React from "react";

function Welcome() {
    return (
        <div className="child-body">
            <h1>
                Welcome to Sky Angel
            </h1>
            <p>Avoid the birds to score!</p>
            <button>Start Game</button>
        </div>
    );
}

export default Welcome;