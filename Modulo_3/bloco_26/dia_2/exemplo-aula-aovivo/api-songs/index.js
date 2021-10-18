// Este arquivo é o entre-point da nossa aplicação
// Está acima de todas as camadas()

const express = require('express');
const bodyParser = require('body-parser');
const songsRoutes = require('./routes/songRoutes')

const app = express();
app.use(bodyParser.json());

app.use(songsRoutes)

const PORT = 3001;

app.listen(PORT, () => console.log(`Servidor roda aqui --> ${PORT}`));