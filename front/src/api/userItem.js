async function getItemList(id) {
  const res = await fetch(`/api/users/${id}/items`);
  const result = await res.json();
  return result.data;
}

export { getItemList };
