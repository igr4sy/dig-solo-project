function createDonationsRepository(knex, table = 'donations') {
  const create = async (payload) => {
    const newDonation = await knex(table).insert(payload).returning('*');

    return newDonation[0];
  };

  return { create };
}

module.exports = { createDonationsRepository };
