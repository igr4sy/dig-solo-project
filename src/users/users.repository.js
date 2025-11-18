function createUsersRepository(knex, table = 'users') {
  const findById = async (id) => {
    const user = await knex
      .select()
      .from(table)
      .where('id', Number(id))
      .first();
    return user;
  };

  return { findById };
}

module.exports = { createUsersRepository };
