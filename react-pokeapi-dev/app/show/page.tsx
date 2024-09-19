"use client";

import React from "react";
import PokeData from "../_utils/pokedata";

export default function Home() {
  return (
    <div>
      <PokeData pokedexId={10} />
    </div>
  );
}
