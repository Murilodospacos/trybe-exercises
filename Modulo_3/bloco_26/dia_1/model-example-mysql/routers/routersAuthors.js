const router = require("express").Router();
const Author = require('../models/Author');

router.get('/', async (_req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
});

module.exports = router;