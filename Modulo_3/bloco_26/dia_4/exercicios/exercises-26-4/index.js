const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const nomesBemVindo = [];

app.get('/nomes', function(req, res) {
  res.json(nomesBemVindo);
});

// Exercicio 1
// app.get('/ping', function(_req, res) {
//   res.status(200).json({ "message": "pong" });
// });

// Exercicio 2
// app.post('/hello', function(req, res) {
//   const { name } = req.body;
//   nomesBemVindo.push({name})
//   res.status(200).json({"message": `Hello, ${name}!`})
// });

// Exercicio 3
// app.post('/greetings', function(req, res) {
//   const { name, age } = req.body;

//   if(parseInt(age, 10) <= 17) {
//     return res.status(401).json({ message: `Unauthorized` });
//   }

//   res.status(200).json({ message: `Hello, ${name}!` })
// })

// Exercicio 4
app.put('/users/:name/:age', function(req, res) {
  const { name, age } = req.body;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));