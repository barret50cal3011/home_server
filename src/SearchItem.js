import React from "react";
import "./SearchItem.css"

function SearchItem(){
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    }

    return(
        <div className="SearchItemSection">
            <p className="SearchItemTxt">What item are you looking for?</p>
            <input 
                className="SearchItem"
                onChange={onSearchValueChange}
            />
        </div>
    );
}

export {SearchItem};