const api = require('../exercicios/exercise6');

describe('testando a requisição', () => {
  const apiURL = jest.spyOn( api, 'fetchURL');
  afterEach(apiURL.mockReset);

  test('Testanto requisição caso a promise resolva', async () => {
    apiURL.mockResolvedValue('request sucess');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('request sucess');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });
  test('Testando requisição caso a promise seja rejeitada', async () => {
    apiURL.mockRejectedValue('request failed');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('request failed');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });

});