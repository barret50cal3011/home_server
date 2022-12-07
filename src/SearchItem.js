import React from "react";
import "./SearchItem.css"

function SearchItem(){
    return(
        <div className="SearchItemSection">
            <p className="SearchItemTxt">What item are you looking for?</p>
            <input className="SearchItem"/>
        </div>
    );
}

export {SearchItem};