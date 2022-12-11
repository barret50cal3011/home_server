import React from "react";
import "./AddItem.css"

function AddItem({items, setItems}){
    const onAddClick = (() => {
        const new_name = document.getElementById("name-input").value;
        const new_price = document.getElementById("price-input").value;

        if(new_name === ""){
            console.error("no name entered");
        }else if(new_price === ""){
            console.error("no price enterd");
        }else if(items.find((item) => {return item.name === new_name})){
            console.error("the item already exists");
        }else{
            const new_item = {name: new_name, price: new_price};
            const new_list = [...items];
            new_list.push(new_item);
            setItems(new_list);
        }
    });

    return(
        <div className="AddItemSection">
            <h1 className="AddTitle"> Add item to list</h1>
            <div className="AddNameSection">
                <p className="AddInfo">Name </p>
                <input id="name-input" className="AddItemName"/>
            </div>
            <div className="AddPriceSection">
                <p className="AddInfo">Price </p>
                <input id="price-input" type="number" className="AddItemPrice"/>
            </div>
            <button 
                className="AddItemButton"
                onClick={onAddClick}
            >add item</button>
        </div>
    );
}

export {AddItem};