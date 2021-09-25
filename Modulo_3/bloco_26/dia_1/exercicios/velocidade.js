const readline = require('readline-sync');

function velocidadeMediaDoCarro(){
  console.log('Vamos calcular a velocidade média de um Carro?');

  const distancia = readline.questionInt('Digite a distância em Metros:');
  const tempo = readline.questionInt('Digite o tempo em segundos:');

  const calculaVelocidadeMediaDoCarro = (distancia / tempo).toFixed;

  console.log(`A velocidade média é: ${calculaVelocidadeMediaDoCarro} m/s`);
}

velocidadeMediaDoCarro();

