import React from "react";

function Item(props){
    return(
        <li>
            <p> Name: {props.name}</p>
            <p> Price: {props.price}COP</p>
        </li>
    );
}

export {Item};