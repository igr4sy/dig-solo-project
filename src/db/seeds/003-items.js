const fixture = require('./data/fixtures');
const items = fixture.items();
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del();
  await knex('items').insert(items);
};
