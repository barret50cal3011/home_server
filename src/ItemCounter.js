import React from "react";
import "./ItemCounter.css"

function ItemCounter(props){
    return (
        <h2 className="ItemCounter">There are {props.size} elements in the list</h2>
    );
}

export {ItemCounter};