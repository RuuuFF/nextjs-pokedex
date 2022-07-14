export function formatText(text: string) {
  return text
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatId(id: string | number) {
  return id.toString().padStart(3, "0");
}
