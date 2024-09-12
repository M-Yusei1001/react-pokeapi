import React from "react";
import PokeName from "@/app/_utils/pokename";
import PokeImage from "@/app/_utils/pokeimage";
import postAction from "@/app/_utils/postaction";

export default function ShowPokemon() {

  return (
    <div>
      <div>
        <form action={postAction}>
          <input type="text" name="pokedexId"></input>
          <button type="submit">送信</button>
        </form>
      </div>
      <PokeName pokedexId={1} />
      <PokeImage pokedexId={1} />
    </div>
  );
}
