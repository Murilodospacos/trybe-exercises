// metodo frank fez na aula vivo, não funcionou

// const mongodb = require('mongodb').MongoClient; // conecta com o mongo

// // url de conexão do mongo
// const MONGO_DB_URL = 'mongodb://localhost:27017/lecture_26_1';
// // nome do banco de dados
// const DB_NAME = 'live_lecture_26_1';

// module.exports = () =>
//   mongodb.connect(MONGO_DB_URL, {
//     userNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then((connection) => connection.db(DB_NAME))
//     .catch((err) => {
//       console.error(err);
//       process.exit(1);
//     })

// metodo do course funcionou
const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('live_lecture_26_1');
    return db;
    })
};

module.exports = connection;