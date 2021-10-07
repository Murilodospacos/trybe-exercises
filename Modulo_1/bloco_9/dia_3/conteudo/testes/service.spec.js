const service = require('../exemplos/service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada.
  service.randomRgbColor = jest.fn()
  .mockReturnValue("rgb(255, 255, 255)"); //O mockReturnValue define um valor padrão de retorno
  // Ao declarar service.randomRgbColor = jest.fn(); , estamos dizendo ao teste que, a partir daquele momento, estamos tomando controle da função service.randomRgbColor e que ela será uma simulação da função original.
  service.randomRgbColor();
  //estamos manualmente chamando a função service.randomRgbColor(); . Caso isso não seja feito, o teste expect(service.randomRgbColor).toHaveBeenCalled() irá falhar. Isso acontece porque mockar uma função redefine seu comportamento, mas não a executa. A propriedade toHaveBeenCalled() espera que a função dentro do expect tenha sido executada por alguma chamada anterior a essa linha dentro do contexto desse teste.
  expect(service.randomRgbColor).toHaveBeenCalled();
});