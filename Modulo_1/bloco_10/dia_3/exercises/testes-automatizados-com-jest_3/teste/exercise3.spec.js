const service = require('../exercicios/exercise1');

describe("Testando implementações", () => {
test('mockando função para receber 3 parâmetros e retornar sua multiplicação', () => {
   // criando o mock e substituindo a implementação
  service.randomNumber = jest.fn()
  .mockImplementation((a, b, c) => a * b * c);
  
  expect(service.randomNumber(1, 2, 3)).toBe(6);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(1, 2, 3);
});

  // resetando o mock
  test('Mokando a função para receber 2 parêmetros e retorna sua soma', () => {
  service.randomNumber.mockReset();

  expect(service.randomNumber).toHaveBeenCalledTimes(0);

  service.randomNumber.mockImplementation((a, b) => a + b);
  
  expect(service.randomNumber(2, 2)).toBe(4);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(2, 2);
});
});