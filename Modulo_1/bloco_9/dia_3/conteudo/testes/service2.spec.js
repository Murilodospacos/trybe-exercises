const service2 = require('../exemplos/service2');

test("#randomRgbColor", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  service2.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

  expect(service2.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service2.randomRgbColor()).toBe("first call");
  expect(service2.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service2.randomRgbColor()).toBe("second call");
  expect(service2.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service2.randomRgbColor()).toBe("default value");
  expect(service2.randomRgbColor).toHaveBeenCalledTimes(3);
});