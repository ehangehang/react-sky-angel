import React, { useState, useEffect } from "react";
import bird from "../../../assets/img/bird.gif"
import './Bird.css';

function Bird() {
    const [positionX, setPositionX] = useState(-100);
    const [positionY, setPositionY] = useState(0);
    // masih glitching, harusnya burung pindah posisi y setelah x keyframe selesai
    const [isFinished, setIsFinished] = useState(true);
    const containerWidth = 1024;
    const speed = 1;

    useEffect(() => {
        const timer = setInterval(() => {
            setIsFinished(false);
            setPositionX((prevPositionX) => 
            (prevPositionX + speed) % containerWidth);
        });

        return () => {
            clearInterval(timer);
            setIsFinished(true);
        };
    });

    useEffect(() => {
        setPositionY(Math.floor(Math.random() * containerWidth) + 1);
    }, [isFinished]);

    return (
        <img src={bird} alt="bird" className="bird" style={{right: positionX, top: positionY}}/>
    );
}

export default Bird;