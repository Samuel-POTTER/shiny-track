import { PokemonDetails } from "@/types";
import { useState } from "react";

const usePokemonByName = () => {
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getPokemonByName = async (name: string) => {
    try {
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { pokemon, loading, error, getPokemonByName };
};

export default usePokemonByName;
