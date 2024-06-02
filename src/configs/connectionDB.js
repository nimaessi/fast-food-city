import mysql from 'mysql2/promise';

export const connection = await mysql.createConnection({
    host: 'http://localhost:8080',
    user: 'root',
    database: 'ffc',
  });

  // Function to check the connection
async function checkConnection() {
  try {
    const connection = await pool.getConnection();
    await connection.ping();
    console.log('Connected to the database successfully.');
    connection.release();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

checkConnection();
export const selectProduct = async () => {
  try {
    checkConnection();

    const [results, fields] = await connection.query(
      'SELECT * FROM products'
    );
  
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  } catch (err) {
    console.log(err);
  }
  
}