const { createUsersRepository } = require('./users.repository');
const { createUsersService } = require('./users.service');
const { createUsersController } = require('./users.controller');

function initUsers(knex) {
  const repository = createUsersRepository(knex);
  const service = createUsersService(repository);
  const controller = createUsersController(service);

  return controller;
}

module.exports = { initUsers };
