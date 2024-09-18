export default async function pokeName({
  pokedexId,
}: {
  pokedexId: number;
}): Promise<string | Error> {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexId}/`);
    const pokemon = await res.json();
    return pokemon.name;
  } catch (e) {
    return new Error("Not found");
  }
}

// import React, { useState } from "react";

// return <div>{pokemonName ?? "Loading..."}</div>;

// export default function PokeName({ pokedexId }: { pokedexId: number }) {
//   const [pokemonName, setPokemonName] = useState<string | null>(null);

//   const getPokemon = async (pokedexId: number) => {
//     setPokemonName(null);
//     try {
//       const res = await fetch(
//         `https://pokeapi.co/api/v2/pokemon/${pokedexId}/`,
//       );
//       const pokemon = await res.json();
//       return pokemon;
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   useEffect(() => {
//     const controller = new AbortController();
//     const fetchPokemon = async () => {
//       try {
//         const pokemon = await getPokemon(pokedexId);
//         if (!controller.signal.aborted) {
//           setPokemonName(pokemon.name);
//         }
//       } catch (e) {
//         throw new Error(`Error!: ${e}`);
//       }
//     };

//     fetchPokemon();

//     return () => {
//       controller.abort();
//     };
//   }, [pokedexId]);

//   return <div>{pokemonName ?? "Loading..."}</div>;
// }
