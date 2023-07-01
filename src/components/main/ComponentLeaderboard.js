import React, { useEffect, useState } from "react";
import Board from "../objects/leaderboard/ObjectLeaderboard";
import axios from "axios";
import "./styles/StylesLeaderboard.css";

function Leaderboard({leaderboardHandler}) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        axios.get("http://localhost:8000/api/api-data")
        .then(res => {
            setData(res.data);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const buttonLeaderboard = () => {
        leaderboardHandler();
    }

    return (
        <div>
            <Board data={data} />
            <button className="eightbit-btn-small" onClick={buttonLeaderboard}>Back</button>
        </div>
    );
}

export default Leaderboard;