// const { MongoClient } = require('mongodb');

// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017'; // ou coloque sua URL do MongoDB aqui

// let schema = null;

// async function connection() {
//   if (schema) return Promise.resolve(schema);
//   return MongoClient
//     .connect(MONGO_DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then((conn) => conn.db('jwt_exercise'))
//     .then((dbSchema) => {
//       schema = dbSchema;
//       return schema;
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }

// module.exports = connection;

const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('jwt_exercise');
    return db;
    });
};

module.exports = connection;