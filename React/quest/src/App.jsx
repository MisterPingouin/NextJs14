import PokemonCard from "./components/PokemonCard";
import "./App.css";
import PropTypes from "prop-types";

PokemonCard.propTypes = {

  pokemon: PropTypes.shape({

    name: PropTypes.string.isRequired,

    imgSrc: PropTypes.string,

  }).isRequired,

}

function App() {

  const pokemonList = [

    {
  
      name: "bulbasaur",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  
    },
  
    {
  
      name: "mew",
  
    },
  
  ];

  const selectedPokemon = pokemonList[0];

  return (
    <div>
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}

export default App;

