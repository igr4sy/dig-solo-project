const fixture = require('./data/fixtures');
const donations = fixture.donations();
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('donations').del();
  await knex('donations').insert(donations);
};
