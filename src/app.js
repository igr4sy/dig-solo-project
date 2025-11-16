const path = require('path');
const express = require('express');

function buildApp() {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '..', '/public')));

  app.use('/api', (req, res) => {
    res.send('hello');
  });

  return app;
}
module.exports = { buildApp };
