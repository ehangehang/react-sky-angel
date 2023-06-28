import React, { useState, useEffect } from "react";
import plane from "../../assets/img/plane.png";
import HUD from "../objects/hud/ObjectHud";
import Bird from "../objects/bird/ObjectBird";

function Game() {
    const [x, setX] = useState(-300);
    const [y, setY] = useState(0);

    useEffect(() => {
        const handleEvent = (e) => {
            const step = 10;
                switch (e.key) {
                    case "ArrowUp":
                        if (y > -320) 
                        setY(y => y - step);
                        break;
                    case "ArrowDown":
                        if (y < 320) 
                        setY(y => y + step);
                        break;
                    case "ArrowLeft":
                        if (x > -460)
                        setX(x => x - step);

                        break;
                    case "ArrowRight":
                        if (x < 460)
                        setX(x => x + step);
                        break;
                    default:
                        break;
                }
            
        };
        
        window.addEventListener("keydown", handleEvent);

        return () => {
            window.removeEventListener("keydown", handleEvent);
        }
    });

    return (
        <div>
            <img 
                src={plane} alt="plane" 
                style={{
                    height: '100px',
                    position: 'relative',
                    top: y,
                    left: x,
                    }}
            />
            <Bird/>
            <HUD/>
        </div>
    );
}

export default Game;