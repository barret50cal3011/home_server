import React from "react";
import "./ItemCounter.css"

function ItemCounter({total_items}){
    return (
        <h2 className="ItemCounter">There are {total_items} elements in the list</h2>
    );
}

export {ItemCounter};