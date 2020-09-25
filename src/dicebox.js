import React from "react";
import Dice from "./dice";

export default class Dicebox extends React.Component {
    constructor() {
        super();
        this.state = {
            die: [
                {
                    value: 1,
                    locked: false,
                },
                {
                    value: 4,
                    locked: false,
                },
                {
                    value: null,
                    locked: false,
                },
                {
                    value: null,
                    locked: false,
                },
                {
                    value: null,
                    locked: false,
                },
            ],
        };
    }
    render() {
        return (
            <div>
                <h1>Dicebox</h1>
                {this.state.die.map((dice) => {
                    <Dice value={dice.value} />;
                })}
            </div>
        );
    }
}
