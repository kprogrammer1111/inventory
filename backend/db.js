
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'inventory_db',
  password: 'password',
  port: 5433,
});

module.exports = pool;
