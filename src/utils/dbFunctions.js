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
     throw "An error occurred";
  }
  const connection = await connectDB();
  const [results] = await connection.query(
    'SELECT * FROM category where slug = ?',
    [slug]
  );
  connection.end();
  return results[0];
}
const productOfCategory = async (idCategory) =>{
  const connection = await connectDB();
  const [results] = await connection.query(
    'SELECT products.* , size_product.price, size_product.size FROM products INNER JOIN size_product ON size_product.id_product = products.id WHERE products.id_category = ?',
    [idCategory]
  );
  connection.end();
  return results;
}
const findAdmin = async (username) => {
  const connection = await connectDB();
  const [result] = await connection.query(
    'SELECT * FROM admin WHERE username = ?',
    [username]
  );
  connection.end();
  return result;
}


export{ 
  selectCategory, 
  findCategory, 
  productOfCategory,
  findAdmin 
};