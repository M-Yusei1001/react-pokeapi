import React from "react";
import PokeData from "../_utils/pokecard";

export default function Home() {
  const pokeIds = Array.from({ length: 1 }, () => Math.floor(Math.random() * 1025) + 1);

  return (
    <section>
      <div className="container mx-auto">
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
    </section>
  );
}
