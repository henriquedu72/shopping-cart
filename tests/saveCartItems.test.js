const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
// const { expect } = require('chai');
// const { expect } = require('chai');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('Se  ao executar a função com cartItem como argumento o método localStorage é chamado.', () => {
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  test('Se ao executar a função com cartItem como argumento o método localStorage é chamado com dois parametros, o primeiro sendo a chave cartItem e o segundo sendo o valor passado como argumento para saveCartItems.', () => {
    saveCartItems('cartItem');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItem', );
  });
});
