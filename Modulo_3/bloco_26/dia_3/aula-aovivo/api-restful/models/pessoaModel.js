const connection = require('./connections')

// necessario para fazer comparações utilizando id do mongodb
const { ObjectId } = require('mongodb')

const getAll = async () => {
  return await connection()
  .then((db) => db.collection('people')
  .find().toArray())
}

const getById = async (id) => {
  // validação se o id é válido
  if(!ObjectId.isValid(id))
    return null;

  return connection()
  .then((db) => db.collection('people')
  .findOne(ObjectId(id)))
}

const add = async ({ name, age }) => {
  const row = connection()
  .then((db) => db.collection('people')
  .insertOne({ name, age }))

  return {
    id: row.insertedId, // insertedId é o Id que o mongo gera
    name,
    age
  }
}

const update = async ({ id, name, age }) => {
  // validação se o id é válido
  if(!ObjectId.isValid(id))
  return null;

  await connection()
  .then((db) => db.collection('people')
  .updateOne({ _id: ObjectId(id) }, { $set: { name, age } }))

  return { id, name, age }
} // updateOne({1°param},{2°param}) 
  // 1°param where(busca parametro que vai ser atualizado = id)
  // 2°param ($set: {atualiza os parametros = name, age}) 

const exclude = async (id) => {
    // validação se o id é válido
    if(!ObjectId.isValid(id))
    return null;

    await connection()
    .then((db) => db.collection('people')
    .deleteOne({ _id: ObjectId(id) }))
}


module.exports = { getAll, getById, add, update, exclude }