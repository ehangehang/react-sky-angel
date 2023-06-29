import React from "react";
import Plane from "../objects/plane/ObjectPlane";
import HUD from "../objects/hud/ObjectHud";
import Bird from "../objects/bird/ObjectBird";

function Game() {
    return (
        <div>
            <Plane />
            <Bird />
            <HUD />
        </div>
    );
}

export default Game;