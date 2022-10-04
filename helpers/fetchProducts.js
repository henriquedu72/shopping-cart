// const urlApi = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

const fetchProducts = async (product) => {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(endpoint);
    const result = await response.json();
    return result;
  } catch (error) {
    throw Error('You must provide an url');
  }
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
