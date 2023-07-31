// https://youtu.be/-_0dD2shabQ
// http://xn--80adth0aefm3i.xn--j1amh/%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F/21


// const container = document.querySelector('.js-container');
// // const box = document.querySelector('.js-box')
// [...container.children].forEach((box) => {
//     box.addEventListener('click', handlerClick)
// })

// function handlerClick(evt) {
//     console.log(evt.currentTarget);
// }

// container.addEventListener('click', handlerClick)

// function handlerClick(evt) {
//     // console.log('currentTarget', evt.currentTarget);
//     // if (evt.currentTarget === evt.target) {
//     //     return;
//     // }

//     if (!evt.target.classList.contains('js-box')) {
//         return;
//     }

//     console.log('target', evt.target);
// }

// box.addEventListener('click', handlerClick);
// box.addEventListener('click', handlerClick1);
// box.addEventListener('click', handlerClick2);

// function handlerClick(evt) {
//     console.log(evt.target);
//     evt.stopImmediatePropagation();
//     evt.stopPropagation()
//     console.log('fn1');
// }

// function handlerClick1(evt) {
//     console.log(evt.target);

//     console.log('fn2');
// }
// function handlerClick2(evt) {
//     console.log(evt.target);
//     console.log('fn3');
// }


// const box1 = document.querySelector('.js-box-1')
// const box2 = document.querySelector('.js-box-2')
// const box3 = document.querySelector('.js-box-3')


// box1.addEventListener('click', handlerClick1)
// box2.addEventListener('click', handlerClick2)
// box3.addEventListener('click', handlerClick3)



// function handlerClick1() {
//     console.log("box - 1");
// }
// function handlerClick2(evt) {
//     console.log("box - 2");
//     // evt.stopPropagation();
// }
// function handlerClick3(evt) {
//     console.log("box - 3");
// }


// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `)



























// const products = [
//     {
//         id: 1,
//         img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
//         name: 'Монітор',
//         price: 3000,
//         description: '23-дюймовий монітор з Full HD роздільною здатністю.'
//     },
//     {
//         id: 2,
//         img: 'https://img.ktc.ua/img/base/1/6/316526.jpg',
//         name: 'Ноутбук',
//         price: 20000,
//         description: 'Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.'
//     },
//     {
//         id: 3,
//         img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
//         name: 'Смартфон',
//         price: 8000,
//         description: 'Оснащений потрійною камерою та багатоядерним процесором.'
//     },
//     {
//         id: 4,
//         img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
//         name: 'Планшет',
//         price: 12000,
//         description: '10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.'
//     }
// ];


// const container = document.querySelector('.js-products');

// container.insertAdjacentHTML('beforeend', createMarkup(products));
// container.addEventListener('click', handlerProductClick)

// function createMarkup(arr) {
//     return arr.map(({ id, img, name, price }) => `
//         <li data-id="${id}" class="item js-product-item">
//             <img src="${img}" alt="${name}" width="300"/>
//             <h2>${name}</h2>
//             <p>Ціна: ${price} грн</p>
//         </li>`).join('')
// }



// function handlerProductClick(evt) {

//     if (evt.target === evt.currentTarget) {
//         return;
//     }

//     const currentProduct = evt.target.closest('.js-product-item');
//     const  id  = currentProduct.dataset.id;
//     const product = products.find(({ id: productId }) => productId === Number(id))
//     const instance = basicLightbox.create(`
//     <div class="modal">
//       <img src="${product.img}" alt="${product.name}" width="500" />
//       <h2>${product.name}</h2>
//       <h3>${product.price}</h3>
//       <p>${product.description}</p>
//     </div>
// `)
//     instance.show()

// }



// const create = document.querySelector('.js-create');
// const destroy = document.querySelector('.js-destroy');
// const input = document.querySelector('.js-input');
// const boxes = document.querySelector('#boxes');

// create.addEventListener('click', handlerCreate);
// destroy.addEventListener('click', handlerDestroy);
// const title = document.querySelector('.js-title')
// let size = 20;

// function handlerCreate() {
//     const count = Number(input.value);

//     // const elements = [];
//     const fragment = document.createDocumentFragment();

//     for (let i = 0; i < count; i += 1) {
//         const div = document.createElement('div');

//         size += 10;
//         div.style.width = `${size}px`;
//         div.style.height = `${size}px`;
//         div.style.backgroundColor = getRandomHexColor();
//         // elements.push(div);
//         fragment.append(div)
//     }

//     input.value = 0;
//     boxes.append(fragment);
// }

// function handlerDestroy() {
//     boxes.innerHTML = '';
//     size = 20;
//     input.value = 0;
// }


const controls = document.querySelector("#controls");
const createBtn = document.querySelector(".js-create");
const destroyBtn = document.querySelector(".js-destroy");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
    const amount = +controls.firstElementChild.value;
    createBoxes(amount);
});
destroyBtn.addEventListener("click", destroyBoxes);
let size = 20;
function createBoxes(amount) {
    boxes.insertAdjacentHTML('beforeend', new Array(amount)
        .fill(0)
        .map((_) => {
            size += 10;
            const color = getRandomHexColor();
            return `<div style="width: ${size}px; height: ${size}px; background:${color}"></div>`;
        })
        .join("\n"));
}

function destroyBoxes() {
    boxes.innerHTML = "";
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
// const color = getRandomHexColor()
// document.body.style.backgroundColor = getRandomHexColor()
// title.textContent = document.body.style.backgroundColor



