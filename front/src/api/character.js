export async function getCharacters() {
  const res = await fetch('/api/characters').then((res) => res);
  console.log('res', res);

  // return res.json();
}
