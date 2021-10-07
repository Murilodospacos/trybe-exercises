function promisses() {
const promise = new Promise((resolve, reject) => {
  const numbersArray = Array.from({ length:10 }, () => Math.floor(Math.random() * 50))
  const numberSquare = numbersArray.map((response) => response * response);
  const resultSum = numberSquare.reduce((acc, number) => acc + number);
  if( resultSum < 8000) {
    resolve(resultSum);
  } 
  reject(resultSum);
})
  .then((response) => console.log( response + 'Promise resolvida'))
  .catch((response) => console.log( response + 'Promise rejeitada'))
}
promisses();