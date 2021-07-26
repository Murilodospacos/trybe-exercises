import "./App.css";
import React, { useState, useEffect } from "react";
import useAbility from "./hooks/useAbility";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10)
  const [abilities, setPokeUrl] = useAbility()

  const handleMorePokemons = () => {
    setLimit(limit + 5)
    console.log(limit);
  }

  // DidMount, DidUpdate, 
  useEffect(() => {
    const getPokemons = async () => {
      const endPoint = `https://pokeapi.co/api/v2/pokemon?offset=151&limit=${limit}`;
      const { results } = await fetch(endPoint).then((data) => data.json());
      setPokemons(results);
    };
    getPokemons();
  }, [limit]);

  // // WillUnmount
  // useEffect(() => () => {
  //   alert('unmount');
  //  },[]);

  return (
    <div className="App">
      <h1>Trybe Go</h1>
      <p>{ abilities.toString() }</p>
      <button type="button" onClick={ handleMorePokemons }> Buscar +10 </button>
      <ul>
        {pokemons.map(({ name, url }) => (
          <li key={name } onClick={ () => setPokeUrl(url) }>{name}</li>
        ))}
      </ul>
    </div>
  );
}
