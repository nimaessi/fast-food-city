import mysql from 'mysql2/promise';

 const connectDB = async () => {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'ffc',
    });
    return connection;
 }
export default connectDB;