import React from "react";
import bird from "../../../assets/img/bird.gif"
import './Bird.css';

function Bird() {
    return (
        <img src={bird} alt="bird" className="bird" />
    );
}

export default Bird;