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

async function initUserItems(id) {
  const res = await fetch(`/api/users/items/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      user_id: id,
      item_id: 1,
      quantity: 10,
    }),
  });
  const result = await res.json();

  return result.data;
}
export { getItemList, updateItemQuantity, deleteUserItems, initUserItems };
