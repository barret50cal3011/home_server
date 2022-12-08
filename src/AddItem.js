import React from "react";
import "./AddItem.css"

function AddItem(){
    const onAddClick = (() => {
        console.log("Add a item");
    });

    return(
        <div className="AddIttemSection">
            <input/>
            <input/>
            <button 
                className="AddItemButton"
                onClick={onAddClick}
            >add item</button>
        </div>
    );
}

export {AddItem};