import React from "react";

function Item({ category, name, cash, onClick }) {
    return(
        <div className="Item">
            <div className="Item__container">
                <section className="Item__header">
                    <p><span>Category: </span>{category}</p>
                </section>
                <section className="Item__info">
                    <p>{name}</p>
                    <p>{cash} zł</p>
                </section>
            </div>
            <button onClick={onClick}>DELETE</button>
        </div>
    )
}

export default Item;