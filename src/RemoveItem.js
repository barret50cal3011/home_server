import React from "react";
import "./RemoveItem.css"

function RemoveItem(){
    const onRemoveClick = (() => {
        console.log("Remove item");
    });

    return(
        <button 
            className="RemoveItem"
            onClick={onRemoveClick}
        >Remove Item</button>
    );
}

export {RemoveItem};