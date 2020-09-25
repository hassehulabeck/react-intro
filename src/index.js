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

    render() {
        return (
            <div>
                <ul>
                    {this.state.products.map((product) => (
                        <Productinfo
                            key={product.id}
                            product={product}
                            //klick={() => this.deleteProduct(product.id)}
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
        </article>
    );
}

ReactDOM.render(<Productlist />, document.getElementById("root"));
