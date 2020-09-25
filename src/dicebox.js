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
                threes: false,
                fours: false,
                yatzy: false,
            },
        };
    }

    componentDidMount() {
        this.roll();
    }

    isSame(amount, combination) {
        for (let i = 1; i <= 6; i++) {
            let counter = 0;
            this.state.die.forEach((dice) => {
                if (dice.value === i) {
                    counter++;
                }
            });
            if (counter >= amount) {
                let combinations = this.state.combinations;
                combinations[combination] = true;
                this.setState({
                    combinations: combinations,
                });
            }
        }
    }

    roll() {
        // Nollställ combinations
        let combinations = this.state.combinations;
        for (let prop in combinations) {
            combinations[prop] = false;
        }
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
        // Kolla de fyra kombinationerna
        this.isSame(2, "pair");
        this.isSame(3, "threes");
        this.isSame(4, "fours");
        this.isSame(5, "yatzy");
    }

    lock(index) {
        // Trestegsmetod för att ändra i en array i state.
        let tempDice = this.state.die;
        tempDice[index].locked = !tempDice[index].locked;
        this.setState({
            die: tempDice,
        });
    }

    render() {
        return (
            <div>
                <h1>Dicebox</h1>
                <p>Totalsumma: {this.state.totalSum}</p>
                <p>{this.state.combinations.pair ? "Par" : ""}</p>
                <p>{this.state.combinations.threes ? "Triss" : ""}</p>
                <p>{this.state.combinations.fours ? "Fyrtal" : ""}</p>
                <p>{this.state.combinations.yatzy ? "Yatzy" : ""}</p>
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
