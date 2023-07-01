import React from "react";
import "./Leaderboard.css";

function Board({data}) {
    return (
        <div>
        {data?.map(element => (
            <div className="lb-board" key={element.id}>
                <p className="lb-board-name">{element.name}</p>
                <p className="lb-board-score">{element.score}</p>
            </div>
        ))}
        </div>
    );
}

export default Board;