import mysql from 'mysql2/promise';

 const connectDB = async () => {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DATABASE_NAME,
    });
    return connection;
 }
export default connectDB;