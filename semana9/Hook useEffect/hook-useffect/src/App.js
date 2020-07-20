import React, {useState , useEffect} from "react";
import axios from "axios";
import PokeCard from "./Components/PokeCard";
import "./styles.css"

const App = () => {
  const [pokelist, setPokelist] = useState([])
  const [pokename, setPokename] = useState("")
  
  const getPokemon = () => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      setPokelist(response.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  }
  useEffect (() => {
    getPokemon()
  }, [])        


  const changePokeName = event => {
    setPokename(event.target.value);
  };

    return (
      <div className="App">
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokelist.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokename && <PokeCard pokemon={pokename} />}
      </div>
    );
  }

export default App;
