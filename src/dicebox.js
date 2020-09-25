import React from "react";
import Dice from "./dice";
import "./dicebox.css";

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

    roll() {
        // Trestegsmetod för att ändra i en array i state.
        // 1. Kopiera. 2.Ändra. 3. Lägg tillbaka.
        let tempDice = this.state.die;
        tempDice.forEach((dice) => {
            if (!dice.locked) {
                dice.value = Math.ceil(Math.random() * 6);
            }
        });
        this.setState({
            die: tempDice,
        });
    }

    render() {
        return (
            <div>
                <h1>Dicebox</h1>
                <section className="dicebox">
                    {this.state.die.map((dice) => (
                        <Dice value={dice.value} />
                    ))}
                </section>
                <button onClick={() => this.roll()}>Rulla</button>
            </div>
        );
    }
}
