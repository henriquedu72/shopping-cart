// const urlApi = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

const fetchProducts = async (argumento) => {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${argumento}`;
    const response = await fetch(endpoint);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
