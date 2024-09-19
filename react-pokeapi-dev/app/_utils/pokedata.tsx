import React from "react";
import PokeImage from "./pokeimage";
import PokeName from "./pokename";

export default function PokeData({ pokedexId }: { pokedexId: number }) {
  return (
    <>
      <div className="text-3xl">
        <PokeName pokedexId={pokedexId} />
      </div>
      <div>
        <PokeImage pokedexId={pokedexId} />
      </div>
    </>
  );
}
