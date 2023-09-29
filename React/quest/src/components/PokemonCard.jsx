function PokemonCard(props) {
  console.log(props);

  const { pokemon } = props;


    return <figure className="poke">      
    {pokemon.imgSrc ? (
      <img src={pokemon.imgSrc} alt={pokemon.name} />
    ) : (
      <p>???</p>
    )}<figcaption>{pokemon.name}</figcaption></figure>;
  }
  
  export default PokemonCard;

