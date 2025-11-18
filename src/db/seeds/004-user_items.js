const fixture = require('./data/fixtures');
const user_items = fixture.user_items();
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user_items').del();
  await knex('user_items').insert(user_items);
};
