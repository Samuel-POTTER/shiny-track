import { Pokemon } from "@/types";
import { useState } from "react";

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(false);
  const [nextRequest, setNextRequest] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [prevRequest, setPrevRequest] = useState(null);

  const fetchPokemon = async (url: string) => {
    setIsLoading(true);
    const pokemonResponse = await fetch(url);
    const pokemonData = await pokemonResponse.json();
    setPokemon(pokemonData.results);
    setIsLoading(false);
    setNextRequest(pokemonData.next);
    setPrevRequest(pokemonData.previous);
  };

  const fetchNextPokemon = () => {
    if (nextRequest) {
      fetchPokemon(nextRequest);
    }
  };

  const fetchPreviousPokemon = () => {
    if (prevRequest) {
      fetchPokemon(prevRequest);
    }
  };

  return { pokemon, isLoading, fetchNextPokemon, fetchPreviousPokemon };
};

export default usePokemon;
