/* 
Exercicio Bloco 4 dia 3 

4- Depois, faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
*****

*/
const pyranmid = (n) => {git
  
  const midPoint = Math.floor((n * 2 - 1) / 2) 
  
  for (let row = 0; row < n; row += 1) {
  let level = "";
  
  for (let col = 0; col < n * 2 - 1 /*9*/; col += 1) {
  if (midPoint - row <= col && midPoint + row >= col) {
  level += "*";
  } else {
  level += " ";
  }
  }
  console.log(level);
  }
  }
  
  const numberOfAst = 50;
  
  pyranmid(numberOfAst); 