let numbers = [20, 10, 6, 12, 70, 8, 100, 2, 30, 26];

let numberOdd = 0;
let contOdd = 0;

for (let index = 0; index < numbers.length; index +=1) {
     if( numbers[index] % 2 > 0 ){
      numberOdd += 1;
     } 
}
if(numberOdd === 0) {  
  console.log('nenhum valor ímpar encontrado')
}
console.log('O Array possui '+ numberOdd + ' númreos ímpares !')