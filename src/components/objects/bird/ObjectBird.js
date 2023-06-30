import React, { useState, useEffect } from "react";
import bird from "../../../assets/img/bird.gif"
import './Bird.css';

function Bird() {
    const [positionX, setPositionX] = useState(-100);
    const [positionY, setPositionY] = useState(0);
    const containerWidth = 1024;
    const speed = 1;

    useEffect(() => {
        const timer = setInterval(() => {
            setPositionX((prevPositionX) => 
            (prevPositionX + speed) % containerWidth);

            if (positionX <= 0) {
                setPositionY(Math.floor(Math.random() * containerWidth) + 1);
            }
        });

        return () => {
            clearInterval(timer);
        };
    });

    return (
        <img src={bird} alt="bird" className="bird" style={{right: positionX, top: positionY}}/>
    );
}

export default Bird;