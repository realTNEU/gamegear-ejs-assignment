// db.js
// const mysql = require('node_modules/mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'node',
  password: 'node@nodejs',
  database: 'gamegear-ejs',
  port: 3307
});
pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
  
    // Use the connection
    connection.query('SELECT * FROM contact', (error, results, fields) => {
      // Handle query results
      if (error) {
        console.error('Error executing query:', error);
        return;
      }
      console.log('Query results:', results);
    });
  
    // Release the connection back to the pool
    connection.release();
  });
  
  
module.exports = pool;
