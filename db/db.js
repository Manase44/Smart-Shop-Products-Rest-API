const { Pool } = require('pg');

const pool = new Pool({
  user: 'gunga',
  password: 'manfikohdb',
  host: 'localhost',
  database: 'productapi'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};