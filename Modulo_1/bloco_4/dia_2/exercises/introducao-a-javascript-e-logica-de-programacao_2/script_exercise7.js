let numbers = [5, 9, 1, 19, 70, 3, 100, 2, 35, 27];
let numberSmall = 2;

for ( let index = 0; index < numbers.length; index += 1) {
          if(numbers[index] < numberSmall) {
            numberSmall = numbers[index];
          }
}
console.log ('O numero menor do array é: ' + numberSmall )