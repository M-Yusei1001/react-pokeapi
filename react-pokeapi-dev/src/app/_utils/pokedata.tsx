import React from "react";
import Image from "next/image";
import pokeImage from "./pokeimage";

export default function pokeData({ pokedexId }: { pokedexId: number }) {
  return (
    <>
      <Image
        src={pokeImage(pokedexId)}
        width={250}
        height={250}
        alt="Pokemon"
      />
    </>
  );
}
