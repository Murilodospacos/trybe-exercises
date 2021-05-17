
const assert = require('assert');

const names = [
  'Aanemariea', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acumulator, string) => acumulator + string.toLowerCase().split('a').length -1, 0);
}
console.log(containsA());
assert.deepStrictEqual(containsA(), 20);
