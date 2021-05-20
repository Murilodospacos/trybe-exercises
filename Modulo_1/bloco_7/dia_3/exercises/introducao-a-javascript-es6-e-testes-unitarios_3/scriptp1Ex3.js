const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }
  return arr;
}

// implemente seus testes aqui
assert.strictEqual(typeof myRemoveWithoutCopy, 'function');
const myTest = [1, 2, 3, 4, 5];
//console.log(myRemoveWithoutCopy(myTest, 1));
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 4]);
//assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 3, 4]);
//assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5),[1, 2, 3, 4]);
