export function formatText(text: string) {
  return text
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatId(id: string | number) {
  return id.toString().padStart(3, "0");
}

export function formatNumber(number: number) {
  const string = number.toString();
  const length = string.length;

  if (length <= 1) return "0." + number;

  const a = string.substring(0, length - 1);
  const b = string[length - 1];

  return a + "." + b;
}

export function getPokemonImageSource(id: string) {
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
}

export function getIdFromURL(url: string) {
  const stringArray: string[] = url.slice(0, -1).split("/");
  const id = stringArray.at(-1);
  return id;
}

export function formatTypesArray(data: any) {
  return data.types.map((obj: any) => obj.type.name);
}
