const express = require('express');
const app = express();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function(_req, res){
  res.status(200).json(drinks);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinksApp = drinks.find((r) => r.id === parseInt(id));

  if (!drinksApp) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(drinksApp);
});

app.listen(3001, () => {
  console.log('Apricação ouvindo na porta 3001');
})