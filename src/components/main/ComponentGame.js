import React, { useState, useEffect, useRef, forwardRef } from "react";
import Plane from "../objects/plane/ObjectPlane";
import HUD from "../objects/hud/ObjectHud";
import Bird from "../objects/bird/ObjectBird";

function Game() {
    const [isColliding, setIsColliding] = useState(false);
    const planeRef = useRef(null);
    const birdRef = useRef(null);

    useEffect (() => {
        const checkCollision = () => {
            // const plane = planeRef.current;
            // const bird = birdRef.current;

            const plane = document.getElementById("plane");
            const bird = document.getElementById("bird");
            
            if (plane && bird) {
                const planeRect = plane.getBoundingClientRect();
                const birdRect = bird.getBoundingClientRect();

                if (
                    planeRect.top < birdRect.bottom &&
                    planeRect.bottom > birdRect.top &&
                    planeRect.right > birdRect.left &&
                    planeRect.left < birdRect.right
                ) {
                    return true;
                }
            }

            return false;
        };

        const handleCollision = () => {
            setIsColliding(checkCollision());

            if (checkCollision()) {
                console.log("collision");
            }
        };

        const interval = setInterval(() => {
            const collision = checkCollision();
            setIsColliding(collision);
            if (collision) {
              console.log("Collision detected");
              clearInterval(interval);
            }
          }, 100);
      
          document.addEventListener("keydown", handleCollision);
      
          return () => {
            document.removeEventListener("keydown", handleCollision);
            clearInterval(interval);
          };
    }, [isColliding]);

    return (
        <div>
            <Plane ref={planeRef} id="plane" />
            <Bird ref={birdRef} id="bird" />
            <HUD isColliding={isColliding} />
        </div>
    );
}

export default Game;