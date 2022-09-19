
const fetchItem = async (arguemento) => {
  try {
    const endpoint = `https://api.mercadolibre.com/items/${arguemento}`;
    const response = await fetch(endpoint);
    const result = await response.json();
    return result;
  } catch (error) {
    throw Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
