import React from "react";

const Card = ({ pokemonData, loading, setPokemonInfo }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemonData.map((pokemon) => (
          <div
            className="card"
            key={pokemon.id}
            onClick={() => setPokemonInfo(pokemon)}
          >
            <h2>{pokemon.id}</h2>
            <img
              src={pokemon.sprites.front_default}
              alt=""
              width="80px"
              height="80px"
            />
            <h2>{pokemon.name}</h2>
          </div>
        ))
      )}
    </>
  );
};
export default Card;
