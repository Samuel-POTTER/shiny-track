"use client";
import { PokemonDetails } from "@/types";
import { createContext, useContext, useState } from "react";

interface PokemonContextValue {
  selectedPokemon: PokemonDetails;
  setSelectedPokemon: React.Dispatch<React.SetStateAction<PokemonDetails>>;
}

export const PokemonContext = createContext<PokemonContextValue>(null!);

const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails>(null!);

  return (
    <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemonInfo = () => useContext(PokemonContext);

export { PokemonProvider, usePokemonInfo };
