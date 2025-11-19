async function getItemList(id) {
  const res = await fetch(`/api/users/${id}/items`);
  const result = await res.json();
  return result.data;
}

async function updateItemQuantity(selectItem, quantity) {
  if (selectItem.quantity > quantity) {
    const res = await fetch(`/api/users/items/${selectItem.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        quantity: quantity,
      }),
    });

    const result = await res.json();
    return result.data;
  } else if (selectItem.quantity === quantity) {
    deleteUserItems(selectItem.id);
  }
}

async function deleteUserItems(id) {
  const res = await fetch(`/api/users/items/${id}`, {
    method: 'DELETE',
  });

  console.log('status', res.status);
}
export { getItemList, updateItemQuantity, deleteUserItems };
