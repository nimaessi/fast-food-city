import connectDB from "src/configs/connectionDB";

const selectCategory = async () => {

  const connection = await connectDB();
  const [results, fields] = await connection.query(
    'SELECT * FROM category'
  );
  connection.end();
  return results;
}

const selectEnableCategory = async () => {
  const connection = await connectDB();
  const sql = 'SELECT * FROM category WHERE `disable` = ?';
  const value = [false]
  const [results, fields] = await connection.query(sql,value);
  connection.end();
  return results;
}

const findCategory = async (slug) => {

  const regex = /[^A-Za-z0-9-]/;
  if(regex.test(slug)){
     throw "آدرس مورد نظر یافت نشد";
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
    'SELECT products.* , size_product.price, size_product.size, size_product.id AS id_size FROM products INNER JOIN size_product ON size_product.id_product = products.id WHERE products.id_category = ?',
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

////admin 
const updateProduct = async (data) =>{
  const {id,title,details} = data;
  const connection = await connectDB();
  const sql = 'UPDATE `products` SET `title` = ?, `details` = ? WHERE `id` = ?';
  const value = [title,details,id];
  const [result] = await connection.query(sql,value);
  connection.end();
  return result;
}
const updatePrice = async (data) =>{
  const {price,size,id_size} = data;
  const connection = await connectDB();
  const sql = 'UPDATE `size_product` SET `price` = ?, `size` = ? WHERE `id` = ?';
  const value = [price,size,id_size];
  const [result] = await connection.query(sql,value);
  connection.end();
  return result;
}
const deletePrice = async (id_size) =>{
  const connection = await connectDB();
  const sql = 'DELETE FROM `size_product` WHERE `id`=?';
  const value = [id_size];
  const [result] = await connection.query(sql,value);
  connection.end();
  return result;
}
const insertPrice = async (data) => {
  const {id_product,price,size} = data;
  const connection = await connectDB();
  const sql = 'INSERT INTO `size_product` (`id_product`,`price`,`size`) VALUES (?,?,?)';
  const value = [id_product,price,size];
  const [result] = await connection.query(sql,value);
  connection.end();
  return result;
}
const insertNewProduct = async (data) => {
  const {title, details, id_category} = data;
  const connection = await connectDB();
  const sql = 'INSERT INTO `products` (`id_category`,`title`,`details`) VALUES (?,?,?)';
  const value = [id_category,title,details];
  const [result] = await connection.query(sql,value);
  connection.end();
  return result;
}
  const deleteProduct = async (id) => {
    const connection = await connectDB();
    const sql = 'DELETE FROM `products` WHERE `id`=?';
    const value = [id];
    const [result] = await connection.query(sql,value);
    connection.end();
    return result;
}
const deleteAllPrice = async (id_product) =>{
  const connection = await connectDB();
  const sql = 'DELETE FROM `size_product` WHERE `id_product`=?';
  const value = [id_product];
  const [result] = await connection.query(sql,value);
  connection.end();
  return result;
}
const upadteCategory = async(data) => {
  const {slug, label,disable,id_category} = data;
  const connection = await connectDB();
  const sql = 'UPDATE `category` SET `slug` = ?, `label` = ?, `disable` = ? WHERE `id` = ?';
  const value = [slug,label,disable,id_category];
  const [result] = await connection.query(sql,value);
  connection.end();
  return result;
}

export{ 
  selectCategory, 
  findCategory, 
  productOfCategory,
  findAdmin,
  updateProduct, 
  updatePrice,
  deletePrice,
  insertPrice,
  insertNewProduct,
  deleteProduct,
  deleteAllPrice,
  upadteCategory,
  selectEnableCategory 
};