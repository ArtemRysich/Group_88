import { createMarkup } from './templates/templateCheckout';
import common from './common.json';

const products = JSON.parse(localStorage.getItem(common.LS_PRODUCTS)) ?? [];
const selectors = {
  list: document.querySelector('.js-list'),
  btnClear: document.querySelector('.js-clear'),
};

if (products.length) {
  selectors.btnClear.hidden = false;
}

selectors.list.insertAdjacentHTML('beforeend', createMarkup(products));
selectors.btnClear.addEventListener('click', handlerClear);

function handlerClear() {
  localStorage.removeItem(common.LS_PRODUCTS);
  window.location.href = './index.html';
}
