// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// const { reduce } = require("cypress/types/bluebird");

// const getSavedCartItems = require("./helpers/getSavedCartItems");
// const saveCartItems = require("./helpers/saveCartItems");

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

const productsSection = document.getElementsByClassName('items')[0];
// const cartItem = document.querySelector('.cart__items');
const cartItems = () => { 
  const cartItem = document.getElementsByClassName('cart__items')[0];
  return cartItem; 
};

const div = document.createElement('div');
const cart = document.querySelector('.cart');
cart.appendChild(div);
 
/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */

const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;
/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

 const sumOfPrices = () => {
  const newLi = document.querySelectorAll('.cart__item');
  let sumery = 0;
  for (let i = 0; i < newLi.length; i += 1) {      
  if (newLi) {
    const result = newLi[i].innerText.split('$')[1];
    const result2 = Number(result);
    sumery += result2;
  } 
  }
  return sumery.toFixed(2);
};

const addSubotal = (arg) => {
  div.className = 'total-price';
  div.innerText = `Subtotal: R$${arg}`;
 };

const createCartItemElement = ({ id, title, price, thumb }) => {
  const newLi = document.createElement('li');
  newLi.className = 'cart__item';
  newLi.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  const image = document.createElement('img');
  image.className = 'imagem_cart';
  image.src = thumb;
  newLi.appendChild(image);
  newLi.addEventListener('click', () => {
    newLi.remove();
    addSubotal(sumOfPrices());
    saveCartItems(cartItems().innerHTML);
  });
  return newLi;
};

const getProducts = async () => {
  const products = await fetchProducts('computador');
  const arrayOfProducts = products.results;
  return arrayOfProducts.map((item) => productsSection.appendChild(createProductItemElement(item)));
}; 

const addCart = async () => {
  const btt = document.querySelectorAll('.item__add');
  btt.forEach(async (param, i) => {
  param.addEventListener('click', async () => {
 cartItems().append(createCartItemElement(
    await fetchItem(getIdFromProductItem(document.querySelectorAll('.item')[i])),
    ));
    addSubotal(sumOfPrices());
    saveCartItems(cartItems().innerHTML); 
    });
  });
};

const erase = () => {
  const newLi = document.querySelectorAll('.cart__item');
  newLi.forEach((param) => param.addEventListener('click', () => {
    param.remove();
    addSubotal(sumOfPrices());
    saveCartItems(cartItems().innerHTML);
  }));
};

window.onload = async () => {
  await getProducts();
    await addCart(); 
    if (getSavedCartItems()) {
      cartItems().innerHTML = getSavedCartItems();
      erase();
    }
    addSubotal(sumOfPrices()); 
  };
