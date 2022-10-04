const saveCartItems = (cartItems) => localStorage.setItem('cartItems', cartItems);
  // console.log('cartitem');

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
