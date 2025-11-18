function createUserItemsRepository(knex, table = 'user_items') {
  const userItemsList = async (id) => {
    const userItemsListArray = await knex
      .select('user_items.id', 'items.name', 'items.exp', 'user_items.quantity')
      .from(table)
      .innerJoin('items', 'user_items.item_id', 'items.id')
      .where('user_items.user_id', Number(id));

    return userItemsListArray;
  };

  return { userItemsList };
}

module.exports = { createUserItemsRepository };
