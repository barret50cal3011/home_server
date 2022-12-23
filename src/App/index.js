import React from "react";
import { AppUI } from "./AppUI";

import './App.css';

function useLocalStorage(item_name, initalValue){
  const local_storage_item = localStorage.getItem(item_name);
  let parsed_item;
  if(!local_storage_item){
    parsed_item = initalValue;
    localStorage.setItem(item_name, JSON.stringify(parsed_item));
  }else{
    parsed_item = JSON.parse(local_storage_item);
  }

  const [item, setItem] = React.useState(parsed_item);

  const saveItem = (new_item) => {
    const strJSON =JSON.stringify(new_item);
    localStorage.setItem(item_name, strJSON);
    setItem(new_item);
  }

  return[item, saveItem];
}

function App() {

  const [items, saveItems] = useLocalStorage("items_v0", []);
  
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
    <AppUI
      items={items}
      setItems={saveItems}      
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      setSelected={setSelected}
      selected={selected}
      searched_items={searched_items}
    />
  );
}

export default App;
