const axios = require('axios');

// Faz uma requisição do tipo GET
axios
  .get('httt://localhost:3000/ping/')
  .then((response) => {
    console.log(response.data);
    console.log(response.stat);
  })
  .catch((error) => {
    console.log(error)
  });