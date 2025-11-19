async function getLoginUser(email) {
  const res = await fetch(`/api/users/${email}`);
  const result = await res.json();
  return result.data;
}

export { getLoginUser };
