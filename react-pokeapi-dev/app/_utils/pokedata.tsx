import React from "react";
import PokeImage from "./pokeimage";
import PokeName from "./pokename";

export default function PokeData({ pokedexId }: { pokedexId: number }) {
  return (
    <div className="flex flex-col items-center w-80 rounded-2xl bg-white shadow-lg">
      <div className="p-4">
        <PokeImage pokedexId={pokedexId} />
      </div>
      <div className="text-3xl font-bold p-4">
        <PokeName pokedexId={pokedexId} />
      </div>
    </div>
  );
}
