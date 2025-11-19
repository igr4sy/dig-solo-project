function createUserItemsRepository(knex, table = 'user_items') {
  const list = async (id) => {
    const userItemsListArray = await knex
      .select('user_items.id', 'items.name', 'items.exp', 'user_items.quantity')
      .from(table)
      .innerJoin('items', 'user_items.item_id', 'items.id')
      .where('user_items.user_id', Number(id))
      .orderBy('user_items.id');

    return userItemsListArray;
  };

  const update = async (id, payload) => {
    const target = await knex(table).where('id', id);
    payload.quantity = target[0].quantity - payload.quantity;
    const updateData = await knex(table)
      .where('id', id)
      .update(payload)
      .returning('*');
    return updateData[0];
  };

  const remove = async (id) => {
    const del = await knex(table).where('id', id).del().returning('*');
    return del[0];
  };

  return { list, update, remove };
}

module.exports = { createUserItemsRepository };
