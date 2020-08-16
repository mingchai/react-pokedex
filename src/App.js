import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/ui/Header';
import PokeGrid from './components/ui/PokeGrid'

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchItems() {
      const result = await axios(`https://pokeapi.co/api/v2/pokemon`);
      // console.log(result.data);
      setItems(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <PokeGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
