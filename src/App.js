import React from "react";
import { ItemCounter } from "./ItemCounter";
import { SearchItem } from "./SearchItem";
import { ItemList } from "./ItemList";
import { Item } from "./Item";
import { AddItemButton } from "./AddItemButton";
import { RemoveItem } from "./RemoveItem";

import './App.css';

const items = [
  {name: "pan blanco", price: 10000},
  {name: "jamon", price: 30000},
  {name: "queso finess", price: 30000}
];

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <ItemCounter size={items.length}/>
        <SearchItem/>
        <ItemList>
          {items.map(item => (
            <Item key={item.name} name={item.name} price={item.price}/>
          ))}
        </ItemList>
        <div className="ButtonsSection">
          <AddItemButton/>
          <RemoveItem/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
