const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: '411630097',
  database: 'university_db',
  connectionLimit: 5
});

module.exports = pool;