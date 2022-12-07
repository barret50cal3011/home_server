import React from "react";
import "./ItemList.css"

function ItemList(props){
    const onPreviousClick = (() => {
        console.log("move back");
    });

    const onNextClick = (() => {
        console.log("move forward");
    });

    return(
        <section>
            <ul className="ItemList">
                {props.children}
            </ul>
            <section className="MoveButtons">
                <button 
                    className="PreviousButton"
                    onClick={onPreviousClick}
                >&#60;&#60;</button>
                <button 
                    className="NextButton"
                    onClick={onNextClick}
                >&#62;&#62;</button>
            </section>
        </section>
    );
}

export {ItemList};