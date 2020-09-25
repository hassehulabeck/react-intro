import React from "react";
import "./dice.css";

export default function Dice(props) {
    return <div className="dice">{props.value}</div>;
}
