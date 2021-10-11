const connection = require('./connection');

// busca todos os livros

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT * FROM  model_example.books;'
  )
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}; 

// busca por author_id através da query "books?authorId=1"
const getByAuthorId = async(author_id) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
  const [books] = await connection.execute(query, [author_id])

  if(books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id
  }))[0];
};

const getById = async (id) => {
  const selectedId = 'SELECT * FROM model_example.books WHERE id=?;'
  const [books] = await connection.execute(selectedId, [id]);

  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id
  }))[0];
}


module.exports = { getAll, getByAuthorId, getById };
