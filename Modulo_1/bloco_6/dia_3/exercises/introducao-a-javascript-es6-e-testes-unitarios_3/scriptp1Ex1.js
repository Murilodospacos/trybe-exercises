const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// Exercicio 1 parte 
assert.strictEqual(typeof sum, 'function');
assert.strictEqual(sum(4, 5), 9);

// Exercicio 2 parte 1
assert.strictEqual(sum(0, 0), 0)

// Exercicio 3 parte 1
assert.throws(() => { 
  sum(0,'5');
});
// Exercicio 4 parte 1
assert.throws(() => { 
  sum(0,'5');
}, /^Error: parameters must be numbers$/);



