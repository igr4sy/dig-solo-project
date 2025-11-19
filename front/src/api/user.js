async function getLoginUser(email) {
  const res = await fetch(`/api/users/${email}`);
  const result = await res.json();
  return result.data;
}

async function createUser(name, email) {
  const req = {
    name: name,
    email: email,
  };

  const res = await fetch(`/api/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(req),
  });
  const result = await res.json();

  return result.data;
}

export { getLoginUser, createUser };
