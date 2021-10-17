const connection = require('./connection');
const { ObejectId } = require('mongodb');

async function getAll() {
  const db = await connection();
  const products = await db.collection('products').find().toArray();
  return products;
}

async function getById(id) {
  const db = await connection();
  if(!ObejectId.isValid(id)) return null;
  return db.collection('products').findOne(ObejectId(id));
}

async function add({ name, brand }) {
  const db = await connection();
  const addProduct = await db.collection('products').insertOne({ name, brand });
  return addProduct;
}

async function update({ id }) {
  const db = await connection();
  if(!ObejectId.isValid(id)) return null;
  const updateProduct = await db
  .collection('products')
  .updateOne({ _id: ObejectId(id) }, { $set: name, brand });
  if(!updateProduct) return add(name, brand);
  return updateProduct;
}

async function exclude (id) {
  const db = await connection();
  if(!ObejectId.isValid(id)) return null;
  const deleteProduct = await db.collection('products').deleteOne({ _id: ObjectId(id) });
  return deleteProduct;
}

module.exports = { getAll, getById, add, update, exclude };