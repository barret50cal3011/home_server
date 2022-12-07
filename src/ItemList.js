import React from "react";
import "./ItemList.css"

function ItemList(props){
    return(
        <section>
            <ul className="ItemList">
                {props.children}
            </ul>
            <section className="MoveButtons">
                <button className="PreviousButton">&#60;&#60;</button>
                <button className="NextButton">&#62;&#62;</button>
            </section>
        </section>
    );
}

export {ItemList};