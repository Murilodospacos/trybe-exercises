const uppercase = require('./exercise1');

it(`Test checks function call uppercase 'trybe' to equal 'TRYBE'`, done => {
  uppercase('trybe', (str) => {
    expect(str).toBe('TRYBE');
    done();
  });
});
