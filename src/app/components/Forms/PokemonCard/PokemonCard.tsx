import { IMAGE_SIZE, POKEMON_TYPE } from "@/constants/pokemon";
import { usePokemonInfo } from "@/context/PokemonContext";
import usePokemonByName from "@/hooks/usePokemonByName";
import { Card } from "antd";
import Image from "next/image";
import React from "react";

interface IPokemonCardProps {
  name: string;
  onClick: () => void;
}

const PokemonCard = ({ name, onClick }: IPokemonCardProps) => {
  const { pokemon, loading } = usePokemonByName(name);
  const { setSelectedPokemon } = usePokemonInfo();

  const computeHeight = (height: number) => {
    return (height / 100).toFixed(2);
  };

  const computeWeight = (weight: number) => {
    return (weight / 10).toFixed(2);
  };

  return pokemon ? (
    <Card
      onClick={() => {
        setSelectedPokemon(pokemon);
        onClick();
      }}
      hoverable
      style={{ width: 240 }}
      cover={
        <Image
          className="pixelated-img"
          src={pokemon?.sprites?.front_default}
          alt={pokemon.name}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
      }
    >
      <p className="text-lg text-center font-bold">{pokemon.name}</p>
      <div className="text-center">
        <p>Weight: {computeWeight(pokemon.weight)} kg</p>
        <p>Height: {computeHeight(pokemon.height)} m</p>
      </div>
      <p className="space-x-2 mt-3 flex justify-center">
        {pokemon.types.map(({ type }) => {
          return (
            <span
              className="rounded-lg px-3 py-2 font-semibold text-white"
              style={{ backgroundColor: POKEMON_TYPE[type.name] }}
              key={type.name}
            >
              {type.name}
            </span>
          );
        })}
      </p>
    </Card>
  ) : (
    <Card loading={loading} style={{ width: 240 }} />
  );
};

export default PokemonCard;
