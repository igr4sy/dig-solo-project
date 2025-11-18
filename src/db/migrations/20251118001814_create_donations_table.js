/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('donations', function (table) {
    table.increments('id').primary;
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id');
    table.integer('character_id').notNullable();
    table.foreign('character_id').references('characters.id');
    table.integer('exp').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('donations');
};
