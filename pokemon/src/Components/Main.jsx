import React, { useState, useEffect } from "react";
import Card from "./Card";
import PokemonInfo from "./PokemonInfo";
import axios from "axios";
const Main = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [pokemonInfo, setPokemonInfo] = useState();

  const requestData = async () => {
    setLoading(true);
    const res = await axios.get(url);

    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    console.log(JSON.stringify(res.data.results));
    setLoading(false);
  };

  const getPokemon = async (pokemonResults) => {
    pokemonResults.map(async (pokemon) => {
      const result = await axios.get(pokemon.url);

      //API for Typhlosion is returning null when fetched
      if (pokemon.name !== "typhlosion") {
        setPokemonData((state) => {
          state = [...state, result.data];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      }
    });
  };
  useEffect(() => {
    requestData();
  }, [url]);
  return (
    <>
      <div className="container">
        <div className="pokemon-list">
          <img className="pokedex" src="./images/pokedex.png" alt="" />
          <div className="left-content">
            <Card
              pokemonData={pokemonData}
              loading={loading}
              setPokemonInfo={(pokemon) => setPokemonInfo(pokemon)}
            />
          </div>
          <div className="btn-group">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokemonData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}
            {nextUrl && (
              <button
                onClick={() => {
                  setPokemonData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>

        <div className="right-content">
          <PokemonInfo pokemonInfo={pokemonInfo} />
        </div>
      </div>
    </>
  );
};

export default Main;
