const fixture = require('./data/fixtures');
const charactersData = Array.from({ length: 3 }, () =>
  fixture.shared_character()
);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('characters').del();
  await knex('characters').insert(charactersData);
};
