import React from 'react'
import Image from 'next/image'

export default function pokeImage({pokedexId}:{pokedexId:number}){
  //1~999までは3ケタ。数がないケタは0で補完される。

  let dexId:string | number = pokedexId;

  const pokedexIdLength:number = pokedexId.toString().length;
  if(pokedexIdLength < 3){
    let temp = "000";
    switch(pokedexIdLength){
      case 1:
        temp = "00" + pokedexId.toString();
        break;
      case 2:
        temp = "0" + pokedexId.toString();
        break;
    }
    dexId = temp;
  }

  return(
    <>
        <Image
          src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${dexId}.png`}
          width={250}
          height={250}
          alt="pokemon"
        />
    </>
  );
}