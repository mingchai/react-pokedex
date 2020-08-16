import React, { useState, useEffect } from "react";
import axios from "axios";

const CharItem = ({ item, index }) => {
  // Capitalize the first letter of each item
  let capitalizedName = `${item.name[0].toUpperCase()}${item.name.slice(1)}`;

  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchImage(indexVal) {
      const result = await axios(
        `https://pokeapi.co/api/v2/pokemon-form/${indexVal}/`
      );
      setImages(result.data.sprites.front_default);
    }

    fetchImage(index);
  }, []);
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={images} alt='' />
      </div>
      <div className='card-back'>
        <h1>{item.name}</h1>
        <ul>
          <li>
            <strong>Name:</strong> {capitalizedName}
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default CharItem;
