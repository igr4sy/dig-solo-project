async function getItemList(id) {
  const res = await fetch(`/api/users/${id}/items`);
  const result = await res.json();
  return result.data;
}

async function updateItemQuantity(selectItem, quantity) {
  console.log('item quantity', selectItem.quantity);
  console.log('quantity', quantity);

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
  }
}
export { getItemList, updateItemQuantity };
