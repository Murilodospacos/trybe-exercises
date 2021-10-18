const router = require('express').Router();
const Book = require('../models/Book');

router.get('/', async (req, res) => {
  const { id } = req.params;
  const book = await Book.getById(id);

  if(!book) return res.status(404).json({ message: 'Book not found'})

  res.status(200).json(book);
})

module.exports = router;