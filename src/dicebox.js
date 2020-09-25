import React from "react";
import Dice from "./dice";
import "./dicebox.css";

export default class Dicebox extends React.Component {
    constructor() {
        super();
        this.state = {
            die: [
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
                {
                    value: null,
                    locked: false,
                },
                {
                    value: null,
                    locked: false,
                },
            ],
            totalSum: 0,
            combinations: {
                pair: false,
                triss: false,
            },
        };
    }

    componentDidMount() {
        this.roll();
    }

    isPair() {
        for (let i = 1; i <= 6; i++) {
            let counter = 0;
            this.state.die.forEach((dice) => {
                if (dice.value == i) {
                    counter++;
                }
            });
            if (counter >= 2) {
                let combinations = this.state.combinations;
                combinations.pair = true;
                this.setState({
                    combinations: combinations,
                });
            }
        }
    }

    roll() {
        let combinations = this.state.combinations;
        combinations.pair = false;
        this.setState({
            combinations: combinations,
        });

        let total = 0;

        // Trestegsmetod för att ändra i en array i state.
        // 1. Kopiera. 2.Ändra. 3. Lägg tillbaka.
        let tempDice = this.state.die;
        tempDice.forEach((dice) => {
            if (!dice.locked) {
                dice.value = Math.ceil(Math.random() * 6);
            }
            total += dice.value;
        });
        this.setState({
            die: tempDice,
            totalSum: total,
        });
        this.isPair();
    }

    lock(index) {
        // Trestegsmetod för att ändra i en array i state.
        let tempDice = this.state.die;
        tempDice[index].locked = true;
        this.setState({
            die: tempDice,
        });
    }

    render() {
        return (
            <div>
                <h1>Dicebox</h1>
                <p>Totalsumma: {this.state.totalSum}</p>
                <p>{this.state.combinations.pair ? "Par" : "Ej par"}</p>
                <section className="dicebox">
                    {this.state.die.map((dice, index) => (
                        <Dice
                            key={index}
                            dice={dice}
                            klick={() => this.lock(index)}
                        />
                    ))}
                </section>
                <button onClick={() => this.roll()}>Rulla</button>
            </div>
        );
    }
}
