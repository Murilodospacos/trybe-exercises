const service = require('../exercicios/exercise1');

test('Test with function randomNumber', () => {
  service.randomNumber = jest.fn()
  .mockReturnValue(10);
  
  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});
