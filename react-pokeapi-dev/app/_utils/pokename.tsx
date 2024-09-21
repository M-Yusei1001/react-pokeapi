"use client";

import React, { useEffect, useState } from "react";

export default function PokeName({ pokedexId }: { pokedexId: number }) {
  const [name, setName] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexId}/`);
        const pokemon = await res.json();
        setName(pokemon.name);
      } catch (e) {
        throw new Error(`Error: ${e}`);
      }
    };
    fetchPokemon();
    return controller.abort();
  }, [pokedexId]);
  return (
    <>
      <p>{name ?? "Loading..."}</p>
    </>
  );
}
