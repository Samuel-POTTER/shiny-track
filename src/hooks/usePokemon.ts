import { Result } from "@/types";
import { useEffect, useState } from "react";

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Result[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [nextRequest, setNextRequest] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [prevRequest, setPrevRequest] = useState(null);

  const fetchPokemon = async (url: string) => {
    setIsLoading(true);
    const pokemonResponse = await fetch(url);
    const pokemonData = await pokemonResponse.json();
    setPokemon((prev) => {
      if (prev) {
        return [...prev, ...pokemonData.results];
      }
      return pokemonData.results;
    });
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

  useEffect(() => {
    fetchNextPokemon();
  }, []);

  return { pokemon, isLoading, fetchNextPokemon, fetchPreviousPokemon };
};

export default usePokemon;
