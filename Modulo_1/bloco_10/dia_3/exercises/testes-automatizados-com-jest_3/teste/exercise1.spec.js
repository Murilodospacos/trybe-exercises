const service = require('../exercicios/exercise1');

test('Test with function randomNumber', () => {
  service.randomNumber = jest.fn()
  .mockReturnValue(10);

  service.randomNumber();
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber()).toBe(10);
});
