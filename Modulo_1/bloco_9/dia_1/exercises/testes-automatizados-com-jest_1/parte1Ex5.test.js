// Compare dois objetos (JSON) para verificar se são idênticos ou não

const {obj1, obj2 ,obj3} = require('./parte1Ex5')

test('Compara se o obj1 é igual ao obj2', () => {
  expect(obj1).toEqual(obj2);
})

test('Compara se o obj1 é igual ao obj3', () => {
  expect(obj1).not.toEqual(obj3);
})

test('compara se o obj2 é igual ao obj3', () => {
  expect(obj2).not.toEqual(obj3);
})