const path = require('path');
const express = require('express');
const knex = require('./db/knex');
const { initCharacters } = require('./modules/characters/index');
const { initUsers } = require('./modules/users/index');
const { initUserItems } = require('./modules/userItems/index');
const { initDonations } = require('./modules/donations');

function buildApp() {
  const app = express();
  app.use(express.json());

  const charactersController = initCharacters(knex);
  const usersController = initUsers(knex);
  const userItemsController = initUserItems(knex);
  const donationsController = initDonations(knex);

  app.get('/api/characters', charactersController.list);
  app.patch('/api/characters/:id', charactersController.update);

  app.get('/api/users/:idOrEmail', usersController.find);
  app.post('/api/users', usersController.create);

  app.get('/api/users/:id/items', userItemsController.list);
  app.post('/api/users/items', userItemsController.create);
  app.patch('/api/users/items/:id', userItemsController.update);
  app.delete('/api/users/items/:id', userItemsController.remove);

  app.post('/api/donations', donationsController.create);

  app.use('/', express.static(path.join(__dirname, '..', '/public')));
  app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  });

  return app;
}
module.exports = { buildApp };
