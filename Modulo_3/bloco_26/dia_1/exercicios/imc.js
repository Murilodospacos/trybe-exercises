const readline = require('readline-sync');
const peso_65KG = 65;
const altura_1M_77CM = 177;

function calculaIMC() {
  const peso = peso_65KG;
  const altura = altura_1M_77CM;

  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  //A função Math.pow() retorna a base elevada ao expoente power, ou seja, baseexpoente.
  // sitaxe : Math.pow(base, expoente)

  console.log(`IMC: ${imc}`);
}

calculaIMC();
module.exports = { calculaIMC }