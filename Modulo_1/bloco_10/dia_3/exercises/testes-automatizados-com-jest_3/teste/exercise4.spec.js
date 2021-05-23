const myFunctions = require('../exercicios/exercise4');

jest.mock('../exercicios/exercise4');

describe('Testando minhas funções', () => {
  test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
  myFunctions.firstFunction.mockImplementation(a => a.toLowerCase());

  expect(myFunctions.firstFunction('MURILO')).toBe('murilo');
  expect(myFunctions.firstFunction).toHaveBeenCalled();
  expect(myFunctions.firstFunction).toHaveBeenCalledTimes(1);
  expect(myFunctions.firstFunction).toHaveBeenCalledWith('MURILO');
});
  test('mockando função que recebe um parâmetro e retorna a última letra', () => {
  myFunctions.secondFunction.mockImplementation(a => a.charAt(a.length -1));

  expect(myFunctions.secondFunction('Casa')).toBe('a');
  expect(myFunctions.secondFunction).toHaveBeenCalled();
  expect(myFunctions.secondFunction).toHaveBeenCalledTimes(1);
  expect(myFunctions.secondFunction).toHaveBeenCalledWith('Casa');
});
  test('mockando função que recebe 3 parâmetros e os concatena', () => {
    myFunctions.thirdFunction.mockImplementation((firstString, secondString, thirdString) => firstString.concat(secondString, thirdString));
  

  expect(myFunctions.thirdFunction('Esp', 'era', 'nça')).toBe('Esperança');
  expect(myFunctions.thirdFunction).toHaveBeenCalled();
  expect(myFunctions.thirdFunction).toHaveBeenCalledTimes(1);
  expect(myFunctions.thirdFunction).toHaveBeenCalledWith('Esp', 'era', 'nça');
  });
});
