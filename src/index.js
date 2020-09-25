import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Productlist extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    id: 2,
                    name: "Hammare B14",
                    price: 129,
                },
                {
                    id: 4,
                    name: "Fiskespö Celeste",
                    price: 799,
                    weight: 230,
                },
                {
                    id: 3,
                    name: "Frontlastare Volvo B16",
                    price: 35000,
                },
            ],
        };
    }

    sortProducts() {
        let tempProducts = this.state.products;
        tempProducts.sort((a, b) => {
            return b.price - a.price;
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

function Productinfo(props) {
    return (
        <article className="produkt">
            <h3>{props.product.name}</h3>
            <p>{props.product.price} inkl moms</p>
            <button onClick={() => props.klick()}>Ta bort</button>
        </article>
    );
}

ReactDOM.render(<Productlist />, document.getElementById("root"));
