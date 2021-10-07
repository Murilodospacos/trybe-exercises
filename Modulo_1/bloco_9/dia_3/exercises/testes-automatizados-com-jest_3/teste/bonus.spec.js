const api = require('../exercicios/bonus');

const fetch = jest.fn(() =>
  Promisse.resolve({
    json: () => Promise.resolve({
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200
    })
  }))

test('este que verifique a chamada dessa API para um resultado específico.', () => {
  expect(api.fetch);
})