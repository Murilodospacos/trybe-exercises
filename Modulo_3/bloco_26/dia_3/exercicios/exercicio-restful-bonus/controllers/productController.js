const express = require('express');
const router = express.Router();
const ProductModel = require('../models/productModel')

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();
  res.status(200).json(products);
  return products;
});

// router.get('/:id', async (req, res, next) => {
// });

// router.post('/', async (req, res, next) => {
// });

// router.put('/:id', async (req, res, next) => {
// });

// router.delete('/:id', async (req, res, next) => {
// });

module.exports = { router };