const raffle = (number, callBack) => {
  let randonNumber = Math.ceil(Math.random() * 6);
  return callBack(number,randonNumber);
}

const compare = (number, randonNumber) => {
  if(number === randonNumber) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

console.log(raffle(2, compare));