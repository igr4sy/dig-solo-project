const { createCharactersRepository } = require('./characters.repository');
const { createCharactersService } = require('./characters.service');
const { createCharactersController } = require('./characters.controller');

function initCharacters(knex) {
  const repository = createCharactersRepository(knex);
  const service = createCharactersService(repository);
  const controller = createCharactersController(service);

  return controller;
}

module.exports = { initCharacters };
