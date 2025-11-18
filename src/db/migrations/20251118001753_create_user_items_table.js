/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('user_items', function (table) {
    table.increments('id').primary;
    table.integer('user_id').notNullable();
    table.foreign('user_id').references('users.id');
    table.integer('item_id').notNullable();
    table.foreign('item_id').references('items.id');
    table.integer('quantity').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('user_items');
};
