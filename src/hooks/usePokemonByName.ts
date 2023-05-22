import { PokemonDetails } from "@/types";
import { useEffect, useState } from "react";

const usePokemonByName = (name: string) => {
  const [pokemon, setPokemon] = useState<PokemonDetails>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPokemonByName = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getPokemonByName();
  }, [name]);

  return { pokemon, loading, error };
};

export default usePokemonByName;
