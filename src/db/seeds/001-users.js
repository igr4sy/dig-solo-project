const fixture = require('./data/fixtures');
const usersData = Array.from({ length: 3 }, () => fixture.user());
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert(usersData);
};
