import React, { useState, useEffect, useRef, forwardRef } from "react";
import Plane from "../objects/plane/ObjectPlane";
import HUD from "../objects/hud/ObjectHud";
import Bird from "../objects/bird/ObjectBird";

function Game({setPlayOver}) {
    const [isColliding, setIsColliding] = useState(false);

    useEffect (() => {
        const checkCollision = () => {
            const plane = document.getElementById("plane");
            const bird = document.getElementById("bird");

            console.log(window.getComputedStyle(plane).transform);
            
            if (plane && bird) {
                const planeRect = plane.getBoundingClientRect();
                const birdRect = bird.getBoundingClientRect();

                if (
                    planeRect.top < birdRect.bottom &&
                    planeRect.right > birdRect.left &&
                    planeRect.left < birdRect.right &&
                    planeRect.bottom > birdRect.top
                ) {
                    console.log("collision");
                    return true;
                }
            }

            return false;
        };

        const handleCollision = () => {
            const collision = checkCollision();
            setIsColliding(checkCollision());

            if (collision) {
                setPlayOver(true);
            }
        };

        const interval = setInterval(() => {
            handleCollision();
          }, 100);
      
          document.addEventListener("keydown", handleCollision);
      
          return () => {
            document.removeEventListener("keydown", handleCollision);
            clearInterval(interval);
          };
    }, [isColliding]);

    return (
        <div>
            <Plane id="plane" />
            <Bird id="bird" />
            <HUD isColliding={isColliding} />
        </div>
    );
}

export default Game;