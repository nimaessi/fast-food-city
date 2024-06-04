import connectDB from "src/configs/connectionDB";

const selectCategory = async () => {

  const connection = await connectDB();
  const [results, fields] = await connection.query(
    'SELECT * FROM category'
  );
  connection.end();
  return results;
}

const findCategory = async (slug) => {

  const regex = /[^A-Za-z0-9-]/;
  if(regex.test(slug)){
     throw "an error occurred";
  }
  const connection = await connectDB();
  const [results] = await connection.query(
    'SELECT * FROM category where slug = ?',
    [slug]
  );
  connection.end();
  return results[0];
}


export{ selectCategory, findCategory };