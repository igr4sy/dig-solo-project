/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('characters', function (table) {
    table.increments('id').primary;
    table.string('name', 64).notNullable();
    table.integer('level').notNullable().defaultTo(1);
    table.integer('exp').notNullable().defaultTo(0);
    table.text('image_url').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('characters');
};
