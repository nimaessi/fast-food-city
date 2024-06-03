import connectDB from "src/configs/connectionDB";

const selectCategory = async () => {

  const connection = await connectDB();
  const [results, fields] = await connection.query(
    'SELECT * FROM category'
  );
  connection.end();
  return results;
}
export{ selectCategory };