import React, { useState, useEffect } from "react";
import './Hud.css';
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";

function Hud({isColliding}) {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const handleEvent = (e) => {
            switch (e.key) {
                case "ArrowUp":
                    setStart(true);
                    break;
                case "ArrowDown":
                    setStart(true);
                    break;
                case "ArrowLeft":
                    setStart(true);
                    break;
                case "ArrowRight":
                    setStart(true);
                    break;
            }
        }

        window.addEventListener("keydown", handleEvent);

        let interval = null;

        if (start) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }

        return () => {
            window.removeEventListener("keydown", handleEvent);
            clearInterval(interval);
        }
    }, [start]);

    useEffect(() => {
        if (isColliding && time !== 0) {
            setStart(false);
        }
    }, [isColliding, time]);

    useEffect(() => {
        return () => localStorage.setItem("score", JSON.stringify(time));
    }, [time]);

    return (
        <div className="hud hud-time">
            <Timer active={start} duration={null}>
                <Timecode time={time} format="s.SS" prefix="Time: " postfix="s"/>
            </Timer>
        </div>
    );
}

export default Hud;