require('../mocks/fetchSimulator');
// const { expect } = require('chai');
// const { toNumber } = require('cypress/types/lodash');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Se a função fetchProducts é uma função', async () => {
    const actual = await fetchProducts();
    expect (typeof fetchProducts).toBe('function');
  });
  // test(' Se ao usar `computador` como arguemento a função chama fetch', () => {
  //   expect(fetchProducts('computador')).toBeCalled(fetch);
  // });
  // test(' Se ao usar `computador` como argumento irá utilizar o endpoint', () => {
  //   const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  //   const actual = fetchProducts('computador');
  //   expect(actual).toEqual(endpoint);
  // });
  // test(' Se ao usar `computador` o retorno da função  igual ao objeto `computadorSearch`', () => {
  //   const actual = fetchProducts('computador');
  //   expect(fetchProducts()).toThrow('You must provide an url');
  // });

});
