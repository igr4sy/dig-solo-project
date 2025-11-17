export async function getCharacters() {
  const res = await fetch('/api/characters');
  const result = await res.json();
  return result.data;
}
