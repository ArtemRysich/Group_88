// {
//     "id": 3,
//     "img": "https://static.dnipro-m.ua/cache/products/1248/catalog_origin_257336.jpg",
//     "name": "Шліфмашина",
//     "price": 1299,
//     "description": "Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."
// }

function createMarkup(arr) {
  return arr
    .map(
      ({ price, name, img, id, description }) => `
    <li data-id="${id}" class="product-card js-product">
        <img src="${img}" alt="${name}" class="product-img">
        <h2 class="product-title">${name}</h2>
        <p class="product-description">${description}</p>
        <p class="product-price">${price} грн</p>
        <button class="product-add-btn js-add">Add to basket</button>
    </li>`
    )
    .join('');
}

export {createMarkup};