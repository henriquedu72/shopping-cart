const saveCartItems = (item) => {
  localStorage.setItem('cartItems', item);
  // localStorage.setItem('cartItems', item.innerHTML);
  console.log('cartitem');
};
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
