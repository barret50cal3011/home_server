import React from "react";
import "./AddItemButton.css"

function AddItemButton(){
    const onAddClick = (() => {
        console.log("Add a item");
    });

    return(
        <button 
            className="AddItemButton"
            onClick={onAddClick}
        >add item</button>
    );
}

export {AddItemButton};