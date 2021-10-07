function promisses() {
  const promise = new Promise((resolve, reject) => {
    const numbersArray = Array.from({ length:10 }, () => Math.floor(Math.random() * 50))
    const numberSquare = numbersArray.map((response) => response * response);
    const resultSum = numberSquare.reduce((acc, number) => acc + number);
    if( resultSum < 8000) {
      resolve(resultSum);
    } 
    reject();
  })
    .then((response) => [2, 3, 5, 10].map((res) => res / response ))
    .then((response) => console.log(response.reduce((acc, number) => acc + number, 0)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
  }
  promisses();