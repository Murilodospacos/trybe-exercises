const connection  = require('./mongodbConnection')

// quando função for chamada faz a coneção com banco de dados
// e trás os dados através da execução da query "SELECT"
const getAllCharacters = async () => {
 return connection().then((db) => db.collection('characters').find().toArray());
}

const insertCharacter = async (name, cartoon) => { 
  connection()
    .then((db) => db.collection('characters').insertOne({ name, cartoon }))
    .then((result) => { id: result.insertedId, name, cartoon });
}

module.exports = { getAllCharacters, insertCharacter }