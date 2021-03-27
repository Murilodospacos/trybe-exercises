let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberLarge = 0;

for (let index = 0; index < numbers.length; index +=1) {
     if( numbers[index] > numberLarge ){
      numberLarge = numbers[index];
     }
}
console.log('O número maior do Array é: '+ numberLarge + '!')
