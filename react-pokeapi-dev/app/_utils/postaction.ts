import { redirect } from "next/navigation";

export default async function postAction(formData: FormData) {
  try {
    const pokedexId = await formData.get("pokedexId");
    console.log(pokedexId);
  } catch (e) {
    console.error(e);
  }
  redirect("/show");
}
