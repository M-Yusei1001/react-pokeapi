import React from "react";
import PokeName from "../../components/pokename";
import PokeImage from "../../components/pokeimage";

export default function ShowPokemon() {
  return (
    <div>
      <PokeName pokedexId={1} />
      <PokeImage pokedexId={1} />
    </div>
  );
}
