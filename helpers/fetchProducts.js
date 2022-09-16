const urlApi = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

const fetchProducts = async (argumento) => {
  if (!argumento) {
    throw new Error('You must provide an url');
  }
  try {
    const endpoint = `${urlApi}?base=${argumento}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

// fetchProducts();

// module.exports = fetchProducts;
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
