import React from 'react'

export default function pokeImage({pokedexId}:{pokedexId:number}){
  let pokeImage:string = "";
  if(pokedexId === 1){
    pokeImage = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png";
  }
  return(
    <>
        <image href={pokeImage}></image>
    </>
  );
}