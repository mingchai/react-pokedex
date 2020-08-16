import React from "react";
import CharItem from './CharItem'

const PokeGrid = ({ items, isLoading }) => {

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
  <section className="cards">{items.map(item => 
    <div>
        <CharItem key={items.indexOf(item) + 1} item={item} index={items.indexOf(item) + 1}/>
    </div>
    )}</section>
  );
};

export default PokeGrid;
