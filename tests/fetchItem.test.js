require('../mocks/fetchSimulator');
// const { expect } = require('chai');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('Se ao usar `MLB1615760527` como arguemento fetch foi chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test(' Se ao usar `xxx` como argumento irá utilizar o endpoint', async () => {
    await fetchItem('MLB1615760527');
      // const endpoint = '';
      expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  test(' Se ao usar `MLB1615760527` o retorno da função sera igual ao objeto `item`', async () => {
    // const actual = ;
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  test(' Se ao usar a função sem argumento, retorna um erro igual a `You must provide an url`', async () => {
    // const actual = fetchItem();
    expect(await fetchItem()).toEqual(new Error('You must provide an url'))
  });
});
