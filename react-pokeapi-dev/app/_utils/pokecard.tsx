"use client";

import React from "react";
import PokeImage from "./pokeimage";
import { useEffect, useState } from "react";

export default function PokeCard({ pokedexId }: { pokedexId: number }) {
  const [name, setName] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [weight, setWeight] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchPokemon = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexId}/`);
        const pokemon = await res.json();
        setName(pokemon.name);
        setType(pokemon.types[0].type.name);
        setWeight(pokemon.weight / 10);
      } catch (e) {
        throw new Error(`Error: ${e}`);
      }
    };
    fetchPokemon();
    return controller.abort();
  }, [pokedexId]);

  return (
    <div className="flex flex-col items-center w-80 rounded-2xl bg-white shadow-lg">
      <div className="p-4">
        <PokeImage pokedexId={pokedexId} />
      </div>
      <div className="p-4 text-center">
        <p>
          Name : <span>{name ?? "Loading..."}</span>
        </p>
        <p>Type : {type ?? "Loading..."}</p>
        <p>Weight : {weight ?? "Loading..."} kg</p>
      </div>
    </div>
  );
}
