// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: process.env.DB_USER || 'postgres',
      database: process.env.DB_NAME || 'sharemon',
    },
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: { directory: './src/db/seeds' },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: { directory: './src/db/seeds' },
  },
};
