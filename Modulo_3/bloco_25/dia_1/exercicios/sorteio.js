const readline = require('readline-sync');

function jogoDeAdivinhacao(){
  console.log('Vamos jogar? Será que você consegue acertar o numero sorteado?');

  const numeroJogador = readline.questionInt('Digite um número entre 0 e 10: ');
  const numeroAleatorio = Math.floor(Math.random() * 10);

  if(numeroAleatorio === numeroJogador) {
    console.log(`Parabéns você acertou =) Numero sorteado: ${numeroAleatorio}`)
  } else {
    console.log('Você errou =(')
  }
  const jogarNovamente = readline.question(
    'Deseja jogar novamente? (Digite "S" para sim, e qualquer outra coisa para não) '
  )
  if(jogarNovamente !== 'S') return console.log('OK, até a próxima!')
  jogoDeAdivinhacao();
}

jogoDeAdivinhacao();
