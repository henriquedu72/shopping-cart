require('../mocks/fetchSimulator');
// const { expect } = require('chai');
// const { toNumber } = require('cypress/types/lodash');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Se a função fetchProducts é uma função', () => {
    // const actual = fetchProducts();
    expect(typeof fetchProducts).toBe('function');
  });
  test(' Se ao usar `computador` como arguemento fetch foi chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  test(' Se ao usar `computador` como argumento irá utilizar o endpoint', async () => {
    await fetchProducts('computador');
      // const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
      expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  test(' Se ao usar `computador` o retorno da função sera igual ao objeto `computadorSearch`', async () => {
    const actual = await fetchProducts('computador');
    expect(actual).toEqual(computadorSearch);
  });
    test(' Se ao usar a função sem argumento, retorna um erro igual a `You must provide an url`', async () => {
    const actual = fetchProducts();
    expect(actual).resolves.toEqual(new Error ('You must provide an url'))
  });

});
