import React from "react";
import "./productlist.css";
import Productinfo from "./productinfo";

export default class Productlist extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        fetch("https://www.hulabeck.se/html/temp/products.json")
            .then((res) => res.json())
            .then(
                (res) => {
                    this.setState({
                        products: res.products,
                    });
                },
                (error) => {
                    console.error(error);
                }
            );
    }

    sortProducts() {
        let tempProducts = this.state.products;
        tempProducts.sort((a, b) => {
            return b.consumerPrice - a.consumerPrice;
        });
        this.setState({
            products: tempProducts,
        });
    }

    deleteProduct(index) {
        let tempProducts = this.state.products;
        tempProducts.splice(index, 1);
        this.setState({
            products: tempProducts,
        });
    }

    render() {
        return (
            <div>
                <h2>Fredag 25 september</h2>
                <ol>
                    <li>Code splitting</li>
                    <li>Fetch, ajax & API</li>
                    <li>
                        "Yatzy" - 5 tärningar. Plus utvecklingar (totalsumma,
                        slå om, två spelare)
                    </li>
                </ol>
                <ul>
                    {this.state.products.map((product, index) => (
                        <Productinfo
                            key={product.id}
                            product={product}
                            klick={() => this.deleteProduct(index)}
                        />
                    ))}
                </ul>
                <button onClick={() => this.sortProducts()}>
                    Sortera efter pris (fallande)
                </button>
            </div>
        );
    }
}
