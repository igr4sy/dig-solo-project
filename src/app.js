const path = require('path');
const express = require('express');
const knex = require('./db/knex');
const { initCharacters } = require('./characters/index');

function buildApp() {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', '/public')));

  const charactersController = initCharacters(knex);

  app.get('/api/characters', charactersController.list);

  app.use('/api', (req, res) => {
    res.send('hello');
  });
  return app;
}
module.exports = { buildApp };
