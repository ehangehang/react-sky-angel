import './styles/StylesWelcome.css';
import React, { useState, useEffect } from "react";

function Welcome({playHandler}) {
    const [name, setName] = useState("");

    useEffect(() => {
        const input = document.querySelector("input");
        input.addEventListener("input", (e) => {
            setName(e.target.value);
        });

        return () => {
            input.removeEventListener("input", (e) => {
                setName(e.target.value);
            });
        }
    });

    const buttonStart = () => {
        localStorage.setItem("name", JSON.stringify(name));
        playHandler();
    };

    return (
        <div className="child-body">
            <h1>
                Sky Angel
            </h1>
            <p>Avoid the birds to score!</p>
            <input type="text" className="eightbit-input" />
            <a onClick={buttonStart} className="eightbit-btn">Start Game</a>
        </div>
    );
}

export default Welcome;