import mysql from '../../node_modules/mysql2'

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
  connection.query('SELECT * FROM contact', (error, results, fields) => {
      if (error) {
        console.error('Error executing query:', error);
        return;
      }
      console.log('Query results:', results);
    });
   connection.release();
  });
  
  function contactSubmit() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    console.log(name)
    console.log(email)
    console.log(message)
    if(name=''){
        alert("Please enter your details")
    }
    else if(email==''){
            alert("Please enter your details")
        }
    else if(message==''){
                alert("Please enter your message")
            }
    else{
        alert("Your message has been sent")
    }
    try {
      pool.getConnection((err, connection) => {
          if (err) {
              console.error('Error connecting to MySQL database:', err);
              throw err; 
          }
  
          console.log('Connected to MySQL database!');
  
          connection.query(`INSERT INTO contact(name,email,message) values('${name}','${email}','${message}');`, (error, results, fields) => {
            if (error) {
                console.error('Error executing query:', error);
            } else {
                console.log('Query results:', results); 
                console.log('Query fields:', fields); 
            }
        });
        
          connection.release(); 
      });
  } catch (error) {
      console.error('Error:', error);
  }
    pool.getConnection((err, connection) => {
     console.log(err)
    });
  }
// module.exports = pool;
