import React from "react";

function ItemList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {ItemList};