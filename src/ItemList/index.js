import React from "react";
import "./ItemList.css";

function ItemList(props){
    const [pageValue, setPage] = React.useState(0);

    const onPreviousClick = (() => {
        if (pageValue > 0){
            setPage(pageValue - 1);
        }
    });

    const onNextClick = (() => {
        setPage(pageValue + 1);
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
                <p className="PageNumber">{pageValue + 1}</p>
                <button 
                    className="NextButton"
                    onClick={onNextClick}
                >&#62;&#62;</button>
            </section>
        </section>
    );
}

export {ItemList};