import React from "react";
import './Hud.css';

function Hud() {
    return (
        <div className="hud">
            <h1 className="hud-score">Score: 0</h1>
            <h1 className="hud-time">Time: 0s</h1>
        </div>
    );
}

export default Hud;