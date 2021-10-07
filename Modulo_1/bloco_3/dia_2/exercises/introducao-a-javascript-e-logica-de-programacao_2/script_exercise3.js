let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let adding = 0;
for (let index = 0; index < numbers.length; index += 1){
  adding += numbers[index];
}
let mean = adding / numbers.length;

console.log('A média é: ' + mean + '!');