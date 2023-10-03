import PokemonCard from "./components/PokemonCard";
import "./App.css";
import PropTypes from "prop-types";
import { useState } from "react";
import NavBar from "./components/NavBar";

PokemonCard.propTypes = {

  pokemon: PropTypes.shape({

    name: PropTypes.string.isRequired,

    imgSrc: PropTypes.string,

  }).isRequired,

}

function App() {

  const [pokemonIndex, setPokemonIndex ] = useState(0);

  const handleClick = (direction) => {

    if (direction === "previous" && pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
    else if (direction === "next" && pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  const pokemonList = [

    {
    
        name: "bulbasaur",
    
        imgSrc:
    
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    
      },
    
      {
    
        name: "charmander",
    
        imgSrc:
    
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    
      },
    
      {
    
        name: "squirtle",
    
        imgSrc:
    
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    
      },
    
      {
    
        name: "pikachu",
    
        imgSrc:
    
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    
      },
    
      {
    
        name: "mew",
    
      },
    
    ];

  const selectedPokemon = pokemonList[pokemonIndex];

  return (
    <div>
      <PokemonCard pokemon={selectedPokemon} />
      <NavBar onButtonClick={handleClick} />
    </div>
  );
}

export default App;

