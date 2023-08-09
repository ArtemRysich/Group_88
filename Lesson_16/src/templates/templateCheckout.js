function createMarkup(arr) {
  return arr
    .map(
      ({ img, name, price, qty }) => `
    <li class="cart-item">
    <img src="${img}" alt="${name}" class="product-img"/>
    <h2>${name}</h2>
    <p>Quantity: ${qty}</p>
    <p>Total price: ${qty * price}</p>
  </li>`
    )
    .join('');
}


export {createMarkup}
