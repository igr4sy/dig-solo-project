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
  app.use(express.static(path.join(__dirname, '..', '/public')));

  const charactersController = initCharacters(knex);
  const usersController = initUsers(knex);
  const userItemsController = initUserItems(knex);
  const donationsController = initDonations(knex);

  app.get('/api/characters', charactersController.list);

  app.get('/api/users/:id', usersController.find);

  app.get('/api/users/:id/items', userItemsController.userItemsList);

  app.post('/api/donations', donationsController.create);

  app.use('/api', (req, res) => {
    res.send('hello');
  });
  return app;
}
module.exports = { buildApp };
