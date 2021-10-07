/* Exercicio 1 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals .
*/

const testingScope = (escopo) => {
  if (escopo) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} ótimo, fui utilizada no escopo`);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(false);

/*Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
Copie o código abaixo.*/

let oddsAndEvens = [13, 3, 4, 10, 7, 2];

let res = oddsAndEvens.sort((a,b) => a-b);

console.log(res);

/* Não tenho certeza se você está familiarizado com a sintaxe da função 103 de seta. Por precaução, aqui está uma breve explicação:
(a, b) => a - b é uma notação de atalho para:

função (a, b) {
retornar a - b;
}
A classificação de função 50 tem uma função de comparação como parâmetro. Isso é o que o algoritmo de classificação usa repetidamente para comparar dois elementos na matriz e decidir qual vai para a esquerda da matriz e qual vai para a direita.

Se você estiver classificando os números em ordem crescente, o menor vai para a esquerda. Se você estiver classificando em ordem decrescente, o maior vai para a esquerda.

A função precisa retornar -1 para que a seja classificado à esquerda de b, 1 seja classificado à direita de be 0 para ser considerado igual.

Neste caso, a - b retorna

um número negativo se a for menor que b - então a será classificado à esquerda de b
um número positivo se a for maior que b - então a será classificado à direita de b
zero se eles for */

//const factorial = n => n < 2 ? 1 : factorial(n-1) * n;
//console.log(factorial(5));


  let fatorial = (n) => {
  let result = n;
  for(let index = 1; index < n; index += 1) {
    result *= index;
  }
}
console.log(fatorial(5));
