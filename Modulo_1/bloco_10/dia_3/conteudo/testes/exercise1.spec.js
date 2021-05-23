const mathSubtrair = require('../exemplos/exercise1');

test("#subtrair", () => {
  //testando se a função foi chamada
  mathSubtrair.subtrair = jest.fn();

  mathSubtrair.subtrair();
  expect(mathSubtrair.subtrair).toHaveBeenCalled();
})