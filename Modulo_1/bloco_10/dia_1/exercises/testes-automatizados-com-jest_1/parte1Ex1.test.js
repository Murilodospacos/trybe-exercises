/*
Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.
Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.
1. A função sum(a, b) retorna a soma do parâmetro a com o b
  1. Teste se o retorno de sum(4, 5) é 9
  2. Teste se o retorno de sum(0, 0) é 0
  3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  4. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/

const sum = require('./parte1Ex1')

test('Teste se o retorno de sum(4, 5) é 9', () => {
  expect(sum(4, 5)).toBe(9);
})
test('Teste se o retorno de sum(0, 0) é 0', () => {
  expect(sum(0, 0)).toBe(0);
})
test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
  expect(() => { sum(4, '5') }).toThrow();
})
test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
  expect(() => { sum(4, '5') }).toThrow(/parameters must be numbers/);
});
