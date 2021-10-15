// Importamos as libs que vamos usar
const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');

// Criamos a aplicação do express
const app = express();

// Instalamos o middleware que fez a leitura e conversão do corpo das requisições em JSON
app.use(bodyParser.json());

app.post('/user', middlewares.createUser);
app.get('/user', middlewares.getAllUsers);
app.use(middlewares.error);

// definimos a porta
const PORT = 3000;

// iniciamos o servidor
app.listen(PORT, () => { console.log(`App listening on port ${PORT}`) })