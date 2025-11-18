async function submitDonation() {
  const req = {
    user_id: 1,
    character_id: 1,
    exp: 20,
  };

  const res = await fetch(`/api/donations`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(req),
  });
  const result = await res.json();
  return result.data;
}

export { submitDonation };
