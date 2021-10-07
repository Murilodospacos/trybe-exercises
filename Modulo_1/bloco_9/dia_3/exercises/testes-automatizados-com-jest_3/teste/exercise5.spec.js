const myFunctions = require('../exercicios/exercise5');

describe('Testando minhas funções', () => {
  test('mockando função para receber um parâmetro e retornar em caixa baixa', () => {
    const first = jest
    .spyOn(myFunctions, 'firstFunction')
    .mockImplementation(a => a.toLowerCase());

  expect(first('MURILO')).toBe('murilo');
  expect(first).toHaveBeenCalled();
  expect(first).toHaveBeenCalledTimes(1);
  expect(first).toHaveBeenCalledWith('MURILO');

  // Restaurando a Função 1 
  myFunctions.firstFunction.mockRestore();

  expect(myFunctions.firstFunction('murilo')).toBe('MURILO');
});

});
