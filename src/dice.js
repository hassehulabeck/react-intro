import React from "react";
import "./dice.css";

export default function Dice(props) {
    if (props.dice.locked) {
        return (
            <div className="dice locked" onClick={() => props.klick()}>
                {props.dice.value}
            </div>
        );
    } else {
        return (
            <div className="dice" onClick={() => props.klick()}>
                {props.dice.value}
            </div>
        );
    }
}
