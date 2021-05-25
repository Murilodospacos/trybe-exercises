const findUser = require('../Exercicios/exercise2');

describe('Testando uma chamada ao banco de dados para buscar usuários.', () => {

teste('Teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado', () => {
  expect.assertions(1);
  return findUser.getUserName('name').then(listName => {
    expect(listName[0].name).toEqual('Mark');
  })
})

teste('teste para o caso em que o usuário não é encontrado.', () => {

})

})