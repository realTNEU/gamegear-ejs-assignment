// db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'node',
  password: 'node@nodejs',
  database: 'gamegear-ejs',
  port: 3307
});

module.exports = pool;
