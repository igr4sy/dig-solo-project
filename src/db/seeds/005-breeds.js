const fixture = require('./data/fixtures');
const breeds = fixture.breeds();
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('breeds').del();
  await knex('breeds').insert(breeds);
};
