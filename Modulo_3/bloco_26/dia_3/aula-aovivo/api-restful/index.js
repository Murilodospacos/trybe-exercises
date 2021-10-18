const express = require('express')
const bodyParser = require('body-parser')
const pessoasController = require('./controllers/pessoasController')

const app = express();
app.use(bodyParser.json());

app.use('/pessoas', pessoasController);

const PORT = 3000

app.listen(PORT, () => console.log(`Rodando aqui --> ${PORT}`));