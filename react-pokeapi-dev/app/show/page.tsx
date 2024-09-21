import React from "react";
import PokeData from "../_utils/pokedata";

const pokeIds = [1, 5, 689, 10, 13, 123, 89, 90, 150, 432];

export default function Home() {
  return (
    <div className="container mx-auto bg-slate-400">
      <div className="flex flex-wrap flex-col justify-center items-center md:flex-row">
        {pokeIds.map((pokeId) => {
          return (
            <div className="p-4" key={pokeId}>
              <PokeData pokedexId={pokeId} key={pokeId} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
