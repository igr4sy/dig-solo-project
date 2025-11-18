import { updateExp } from './character';

async function submitDonation(userId, characterId, selectedItem, quantity) {
  const req = {
    user_id: userId,
    character_id: characterId,
    exp: selectedItem.exp * quantity,
  };

  const res = await fetch(`/api/donations`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(req),
  });
  const result = await res.json();

  if (res.ok) {
    await updateExp(characterId, { exp: req.exp });
  }

  return result.data;
}

export { submitDonation };
