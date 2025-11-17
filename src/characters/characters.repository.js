function createCharactersRepository(knex, table = 'characters') {
  const list = async () => {
    const array = await knex.select().from(table);
    return array;
  };

  return { list };
}

module.exports = { createCharactersRepository };
