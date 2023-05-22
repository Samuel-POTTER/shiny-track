"use client";
import React, { useEffect, useState } from "react";
import usePokemon from "@/hooks/usePokemon";
import PokemonCard from "../components/Forms/PokemonCard/PokemonCard";
import { Drawer } from "antd";
import { usePokemonInfo } from "@/context/PokemonContext";
import Image from "next/image";
import { IMAGE_SIZE } from "@/constants/pokemon";

const Dashboard = () => {
  const { pokemon, isLoading, fetchNextPokemon } = usePokemon();
  const { selectedPokemon } = usePokemonInfo();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        fetchNextPokemon();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPokemon]);

  const createPokemonCard = () => {
    fetch("http://localhost:3000/card", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: selectedPokemon?.name,
      }),
    });
  };

  return (
    <div className="h-screen p-2">
      {isLoading && <div>Loading...</div>}
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div>
          <p className="text-lg text-center font-bold">
            {selectedPokemon?.name}
          </p>
          <Image
            className="pixelated-img"
            src={selectedPokemon?.sprites?.front_shiny}
            alt={selectedPokemon?.name}
            width={IMAGE_SIZE}
            height={IMAGE_SIZE}
          />
        </div>
      </Drawer>
      <div className="grid grid-cols-5 gap-4 px-4 place-items-center">
        {pokemon?.map((pokemon, index) => (
          <PokemonCard
            key={`${pokemon}-${index}`}
            name={pokemon.name}
            onClick={() => {
              setIsDrawerOpen(true);
              createPokemonCard();
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
