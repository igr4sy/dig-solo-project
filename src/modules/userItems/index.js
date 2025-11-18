const { createUserItemsRepository } = require('./userItems.repository');
const { createUserItemsService } = require('./userItems.service');
const { createUserItemsController } = require('./userItems.controller');

function initUserItems(knex) {
  const repository = createUserItemsRepository(knex);
  const service = createUserItemsService(repository);
  const controller = createUserItemsController(service);

  return controller;
}

module.exports = { initUserItems };
