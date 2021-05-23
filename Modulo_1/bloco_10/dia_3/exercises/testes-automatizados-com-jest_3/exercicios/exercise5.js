const firstFunction = (myString) => myString.toUpperCase();
const secondFunction = (myString) => myString.charAt(0);
const thirdFunction = (firstString, secondString) => firstString.concat(secondString);

module.exports = { firstFunction, secondFunction, thirdFunction };