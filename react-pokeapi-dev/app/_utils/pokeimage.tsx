import Image from "next/image";

export default function pokeImage({ pokedexId }: { pokedexId: number }) {
  let dexId = String(pokedexId);
  const pokedexIdLength: number = String(pokedexId).length;

  //1~999までは3ケタ。数がないケタは0で補完される。
  if (pokedexIdLength < 3) {
    dexId = "000";
    switch (pokedexIdLength) {
      case 1:
        dexId = "00" + String(pokedexId);
        break;
      case 2:
        dexId = "0" + String(pokedexId);
        break;
    }
  }
  return (
    <>
      <Image
        src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${dexId}.png`}
        width={250}
        height={250}
        alt="pokemon"
        loading="lazy"
      />
    </>
  );
}
