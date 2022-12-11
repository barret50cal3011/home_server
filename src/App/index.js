import React from "react";
import { ItemCounter } from "../ItemCounter";
import { SearchItem } from "../SearchItem";
import { ItemList } from "../ItemList";
import { Item } from "../Item";
import { AddItem } from "../AddItem";
import { RemoveItem } from "../RemoveItem";

import './App.css';

const default_items = [
  {name: "pan blanco", price: 10000},
  {name: "jamon", price: 30000},
  {name: "queso finess", price: 30000},
  {name: "papas fosforitos", price: 10000},
  {name: "pan hamburguesa", price: 15000}
];

function App() {
  const [items, setItems] = React.useState(default_items);
  const [searchValue, setSearchValue] = React.useState("");
  const [selected, setSelected] = React.useState("");

  let searched_items = [];
  if(searchValue.length === 0){
    searched_items = items;
  }else{
    searched_items = items.filter((item) => {
      const item_text = item.name.toLocaleLowerCase();
      const search_txt = searchValue.toLocaleLowerCase();

      return item_text.includes(search_txt);
    });
  }

  return (
    <React.Fragment>
      <div className="App">
        <AddItem 
          items={items} 
          setItems={setItems}
        />
        <div className="ItemsSection">
          <ItemCounter total_items={items.length}/>
          <SearchItem 
            searchValue={searchValue}
            setSearchValue={setSearchValue}  
          />
          <ItemList>
            {searched_items.map(item => (
              <Item 
                key={item.name} 
                name={item.name} 
                price={item.price} 
                setSelected={setSelected}
                selected={selected}
              />
            ))}
          </ItemList>
          <div className="ButtonsSection">
            <RemoveItem 
              selected={selected} 
              setSelected={setSelected}
              setItems={setItems}
              items={items}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;