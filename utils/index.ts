export function formatText(text: string) {
  return text[0].toUpperCase() + text.slice(1);
}

export function formatId(id: string | number) {
  return id.toString().padStart(3, "0");
}
