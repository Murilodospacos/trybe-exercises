// Exemplo - Funções de primeira classe
const product = (productName, price, isOnSale) => ({
  productName,
  price: `R$ ${price}`,
  sale: isOnSale ? 'For sale' : 'Not for sale',
});

console.log(product('Computador', 3000, false));
// { productName: 'Computador', price: 'R$ 3000', sale: 'Not for sale' }

//Exemplo - HOF - Funções de oredem superior

const button = document.querySelector('#signup-button');

// minha função de primeira classe;
const registerUser = () => {
  // código para registrar a nova pessoa usuária;
  console.log('Registrado com sucesso!');
};

// minha função de segunda classe;
button.addEventListener('click', registerUser);

// Exemplo - estruturando uma HOF

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

// Exemplo mais complexo

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(10, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

// Exemplo numeros pares e impares

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

// Praticando

const wakeUp = () => console.log('Acordando!!');

const takeCoffee = () => console.log('Bora tomar café!!');

const sleep = () => console.log('Partiu dormir!!');

const doingThings = (response) => response();

doingThings(sleep);