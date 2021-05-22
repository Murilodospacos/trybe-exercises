const service = require('../exercicios/exercise2');

test('Test with function randomNumber', () => {
  service.randomNumber = jest.fn()
  .mockImplementationOnce((a, b) => a / b);

  expect(service.randomNumber(10, 5)).toBe(2);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(10, 5);
});