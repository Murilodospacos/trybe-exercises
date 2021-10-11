const router = require("express").Router();
const Book = require('../models/Book');

router.get('/', async (req, res) => {
  const { authorId } = req.query;

  const books = (authorId)
  ? await Book.getByAuthorId(authorId)
  : await Book.getAll();
  
  return res.status(200).json(books);
});


module.exports = router;