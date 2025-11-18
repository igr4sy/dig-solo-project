function createCharactersRepository(knex, table = 'characters') {
  const list = async () => {
    const array = await knex.select().from(table).orderBy('id');
    return array;
  };

  const update = async (id, payload) => {
    const target = await knex(table).where('id', id);
    payload.exp += target[0].exp;
    const updateCharacter = await knex(table)
      .where('id', id)
      .update(payload)
      .returning('*');
    return updateCharacter[0];
  };

  return { list, update };
}

module.exports = { createCharactersRepository };
