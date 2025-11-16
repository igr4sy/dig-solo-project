const knex = require('knex');
const knexConfig = require('../../knexfile');

let env = knexConfig.development;

if (process.env.NODE_ENV === 'production') {
  env = knexConfig.production;
}

module.exports = knex(env);
