const readline = require('readline-sync');
// const peso_65KG = 65; -- exercicio 1
// const altura_1M_77CM = 177; -- exercicio 1

function calculaIMC() {
  // const peso = peso_65KG; -- exercicio 1
  // const altura = altura_1M_77CM; -- exercicio 1
  // const peso = readline.questionInt('Qual o seu peso? (em kg)'); - exercicio 3
  const peso = readline.questionFloat('Qual o seu peso? (em kg)');
  const altura = readline.questionInt('Qual a sua altura? (em cm)');


  console.log(`Peso: ${peso}, Altura: ${altura}`);
  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);
  //A função Math.pow() retorna a base elevada ao expoente power, ou seja, baseexpoente.
  // sitaxe : Math.pow(base, expoente)

  console.log(`IMC: ${imc}`);

  console.log('Situação do IMC:');
  if(imc < 18.5){
    console.log('Abaixo do peso (magreza)')
  } else if(imc >= 18.5 && imc < 24.9) {
    console.log('Peso normal');
  } else if(imc >= 25 && imc < 30) {
    console.log('Acima do peso (sobrepeso)');
  } else if(imc >= 30 && imc < 35) {
    console.log('Obesidade grau I');
  } else if(imc > 35 && imc < 40) {
    console.log('Obesidade grau II');
  } else {
    console.log('Obesidade graus III e IV');
  }
}

calculaIMC();
module.exports = { calculaIMC }