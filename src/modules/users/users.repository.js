function createUsersRepository(knex, table = 'users') {
  const findByIdOrEmail = async (idOrEmail) => {
    const query = isNaN(idOrEmail) ? 'email' : 'id';
    const params = Number(idOrEmail) || idOrEmail;

    const user = await knex.select().from(table).where(query, params).first();
    return user;
  };

  const create = async (payload) => {
    const newDonation = await knex(table).insert(payload).returning('*');
    return newDonation[0];
  };

  return { findByIdOrEmail, create };
}

module.exports = { createUsersRepository };
