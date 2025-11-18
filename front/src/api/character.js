async function getCharacters() {
  const res = await fetch('/api/characters');
  const result = await res.json();
  return result.data;
}

async function updateExp(characterId, exp) {
  const res = await fetch(`/api/characters/${characterId}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(exp),
  });

  const result = await res.json();
  return result.data;
}

export { getCharacters, updateExp };
