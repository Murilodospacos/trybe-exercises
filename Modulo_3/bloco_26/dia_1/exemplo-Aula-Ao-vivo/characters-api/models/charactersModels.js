const connection = require('./mysqlConnection')

// quando função for chamada faz a coneção com banco de dados
// e trás os dados através da execução da query "SELECT"
const getAllCharacters = async () => {
  // Não esquecer de desestruturar [] p/ pegar somente os dados tratados necessários
  const [result] = await connection.execute('SELECT * FROM characters')
  return result;
}

const insertCharacter = async (name, cartoon) => { 
  const [result] = await connection.execute('INSERT INTO characters (name, cartoon) VALUES (?, ?)', [name, cartoon])
  
  const serialized = {
    id: result.insertId,
    name,
    cartoon,
  }
  return serialized;
}

module.exports = { getAllCharacters, insertCharacter }