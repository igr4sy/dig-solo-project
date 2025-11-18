const path = require('path');
const express = require('express');
const knex = require('./db/knex');
const { initCharacters } = require('./characters/index');
const { initUsers } = require('./users/index');
const { initUserItems } = require('./userItems');

function buildApp() {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', '/public')));

  const charactersController = initCharacters(knex);
  const usersController = initUsers(knex);
  const userItemsController = initUserItems(knex);

  app.get('/api/characters', charactersController.list);

  app.get('/api/users/:id', usersController.find);

  app.get('/api/users/:id/items', userItemsController.userItemsList);

  app.use('/api', (req, res) => {
    res.send('hello');
  });
  return app;
}
module.exports = { buildApp };
