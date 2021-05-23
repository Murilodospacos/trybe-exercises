const mathMultiplicar = require('../exemplos/exercise2');

test("#multiplicar", () => {
  // Testando se a função foi chamada e qual seu retorno
  mathMultiplicar.multiplicar = jest.fn().mockReturnValue(4);

  mathMultiplicar.multiplicar();
  expect(mathMultiplicar.multiplicar).toHaveBeenCalled();
  expect(mathMultiplicar.multiplicar(2, 2)).toBe(4);
});