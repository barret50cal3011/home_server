import React from "react";
import "./AddItem.css"

function AddItem(){
    const onAddClick = (() => {
        console.log("Add a item");
    });

    return(
        <div className="AddItemSection">
            <h1 className="AddTitle"> Add item to list</h1>
            <div className="AddNameSection">
                <p className="AddInfo">Name </p>
                <input className="AddItemName"/>
            </div>
            <div className="AddPriceSection">
                <p className="AddInfo">Price </p>
                <input className="AddItemPrice"/>
            </div>
            <button 
                className="AddItemButton"
                onClick={onAddClick}
            >add item</button>
        </div>
    );
}

export {AddItem};