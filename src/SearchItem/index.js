import React from "react";
import "./SearchItem.css"

function SearchItem({searchValue, setSearchValue}){
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return[
        <div className="SearchItemSection">
            <p className="SearchItemTxt">What item are you looking for?</p>
            <input 
                className="SearchItem"
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </div>,
    ];
}

export {SearchItem};