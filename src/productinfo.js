import React from "react";
import "./productinfo.css";

export default function Productinfo(props) {
    return (
        <article className="produkt">
            <h3>{props.product.name}</h3>
            <p>{props.product.consumerPrice} inkl moms</p>
            <button onClick={() => props.klick()}>Ta bort</button>
        </article>
    );
}
