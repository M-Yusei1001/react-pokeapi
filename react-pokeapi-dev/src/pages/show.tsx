import React, { FormEventHandler } from "react";
import PokeName from "@/app/_utils/pokename";
import PokeImage from "@/app/_utils/pokeimage";
import postAction from "@/app/_utils/postaction";

const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const pokedexId = form.get("pokedexId") || "";
}

export default function ShowPokemon() {

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Pokedex ID</span>
            <input
              type="text"
              name="pokedexId"
              id="pokedexId"
            />
          </label>
            <button type="submit">送信</button>
          </form>
      </div>
      <PokeName pokedexId={1} />
      <PokeImage pokedexId={1} />
    </div>
  );
}
