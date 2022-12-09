import React from "react";
import "./Item.css"

function styleColor(selected, name){
    if(selected === name){
        return "#3F0071";
    }else{
        return "#150050"
    }
}

function Item({name, price, setSelected, selected}){
    const onItemSelected = (event) => {
        let input = event.target;
        if(input.checked){
            setSelected(input.id);
        }
    }

    return(
        <li 
            className="Item"
            style={{backgroundColor: styleColor(selected, name)}}
        >
            <input 
                className="RadioItems"
                type="radio"
                name="item"
                id={name}
                onChange={onItemSelected}
            />

            <label 
                className="ItemLabel" 
                htmlFor={name}
            >
                <p> Name: {name}</p>
                <p> Price: {price}COP</p>
            </label>
        </li>
    );
}

export {Item};