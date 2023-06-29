import React, { useState, useEffect } from "react";
import plane from "../../../assets/img/plane.png";
import "./Plane.css";

function Plane() {
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
    
    return(
        <img src={plane} alt="plane" className="plane" style={{
            top: y,
            left: x,
        }} />
    );
}

export default Plane;