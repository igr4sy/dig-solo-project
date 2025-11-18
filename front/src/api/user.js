async function getLoginUser(id) {
  const res = await fetch(`/api/users/${id}`);
  const result = await res.json();
  return result.data;
}

export { getLoginUser };
