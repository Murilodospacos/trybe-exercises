// https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript
// Referência: fiz algumas mudanças no código.

const readline = require('readline-sync');
function calcularFatorialRecursivamente (n) {
  if (n === 1) {
      return 1;
  }
   
  return n * calcularFatorialRecursivamente (n - 1);
}

function calcularFatorial () {
  const fatorial = readline.questionInt('Informe o valor de x: ')
  if (isNaN(fatorial)) {
      return 'Não existe fatorial de um texto';
  }
   
  if (!Number.isInteger(fatorial) || fatorial < 0) {
      return 'Não existe fatorial de um número não natural';
  }

  console.log(`x: ${fatorial}`)
   
  if (fatorial === 0 || fatorial === 1) {
      return 1;
  }
  const resultado = calcularFatorialRecursivamente(fatorial);
  return console.log(`Resultado: ${resultado}`);
}

calcularFatorial();