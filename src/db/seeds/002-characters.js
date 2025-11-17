const fixture = require('./data/fixtures');
const charactersData = fixture.shared_character();
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('characters').del();
  await knex('characters').insert(charactersData);
};
