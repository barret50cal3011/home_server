import React from "react";
import "./Item.css"

function Item(props){
    return(
        <li className="Item">
            <p> Name: {props.name}</p>
            <p> Price: {props.price}COP</p>
        </li>
    );
}

export {Item};