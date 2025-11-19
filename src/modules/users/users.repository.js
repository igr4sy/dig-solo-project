function createUsersRepository(knex, table = 'users') {
  const findByIdOrEmail = async (idOrEmail) => {
    const query = isNaN(idOrEmail) ? 'email' : 'id';
    const params = Number(idOrEmail) || idOrEmail;

    const user = await knex.select().from(table).where(query, params).first();
    return user;
  };

  return { findByIdOrEmail };
}

module.exports = { createUsersRepository };
