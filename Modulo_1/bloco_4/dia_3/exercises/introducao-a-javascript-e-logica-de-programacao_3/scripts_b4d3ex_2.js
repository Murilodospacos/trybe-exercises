/* 
Exercicio Bloco 4 dia 3 

2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
n = 5

*
**
***
****
*****

*/
/*
let n = 5;
let ast = '*';
let prints;

for(let i = 0; i <= n; i += 1){
  prints = ast.repeat(i);
  console.log(prints);
}
*/
// Outra forma de resolver

let size = 5;
let symbol ='*';
let inputLine='';

for (let lineIndex = 0; lineIndex <= size; lineIndex +=1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
}