import React from "react";
import "./RemoveItem.css"

function RemoveItem({selected, setSelected, setItems, items}){
    const onRemoveClick = (() => {
        items = items.filter((item) => {
            return item.name !== selected;
        });

        if(selected != null){
            setSelected(null);
            setItems(items);
        }
    });

    return(
        <button 
            className="RemoveItem"
            onClick={onRemoveClick}
        >Remove Item</button>
    );
}

export {RemoveItem};