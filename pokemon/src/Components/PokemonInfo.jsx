import React from "react";

const PokemonInfo = ({ pokemonInfo }) => {
  return (
    <>
      {!pokemonInfo ? (
        ""
      ) : (
        <>
          <h1>{pokemonInfo.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`}
            alt=""
            width="300px"
            height="300px"
          />
          <h2 className="text">Abilities:</h2>
          <div className="abilities">
            {pokemonInfo.abilities.map((pokemon) => (
              <div className="group">
                <h2>{pokemon.ability.name}</h2>
              </div>
            ))}
          </div>
          <h2 className="text">Stats:</h2>
          <div className="base-stats">
            {pokemonInfo.stats.map((pokemon) => (
              <h3>
                {pokemon.stat.name}: {pokemon.base_stat}
              </h3>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default PokemonInfo;
