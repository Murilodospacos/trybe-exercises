/* 
Exercicio Bloco 4 dia 3 

4- Depois, faça uma pirâmide com n asteriscos de base:

n = 5

  *
 ***
*****

*/

let n = 5;
let symbol = '*';
let inputLine ='';
let inputPosition = n;
let midOfMatrix = (n + 1) /2; 
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

  for(let index = 0; index <= midOfMatrix; index += 1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
      if ( columnIndex > controlLeft && columnIndex < controlRight) {
        inputLine = inputLine + symbol;
      } else {
        inputLine = inputLine + ' ';
      }
    }
    console.log(inputLine);
    inputLine = '';
    controlRight += 1;
    controlLeft -= 1;
  }
