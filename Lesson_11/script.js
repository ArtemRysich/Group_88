// const title = document.querySelector('h1');
// const title = document.querySelector('.js-title');
// const title = document.querySelector('#title')

// console.log(title);


// const items = document.querySelectorAll('.js-item')
// console.log(items);
// console.log([...items]);
// console.log(Array.from(items));


// const title = document.getElementById('title');
// console.log(title);


// const items2 = document.getElementsByClassName('js-title')
// console.log(items2);



// const list = document.querySelector('.js-list')

// const li = document.createElement('li');
// const h2 = document.createElement('h2')
// li.append(h2)
// li.textContent = 5;
// li.classList.add('js-item');
// const li2 = document.createElement('li');
// li2.textContent = 6;
// li2.classList.add('js-item');

// const liItems = [li, li2];
// console.log(li['classList']);
// li.classList.replace('js-it', 'js-elem')
// li.classList.remove('js-item')
// list.append(...liItems)
// console.dir(li);

// const list = document.querySelector('.js-list')
// const li = `<li class="js-item">5</li>`;


// list.insertAdjacentHTML('beforeend',li)
// list.innerHTML = ''




// const items = document.querySelectorAll('.js-item')
// const items2 = document.getElementsByClassName('js-item')
// const list = document.querySelector('.js-list');

// console.log('static', items);
// console.log('dynamic', items2);


// let markup = '';
// for (let i = 1; i <= 3; i += 1) {
//     markup += `<li class="js-item">${list.children.length + i}</li>`
// }
// console.log(markup);


// list.insertAdjacentHTML('beforeend', markup);

// console.log('static', items);
// console.log('dynamic', items2);


// const list = document.querySelector('.js-list');

// console.dir(list);






// Перерва до 21.15

// const list = document.querySelector('.js-list');

// list.style.listStyle = 'none';
// list.style.display = 'flex';



// const input = document.querySelector('.js-query');
// input.value = 'Hello world';
// // input.value = 'Hello world';
// console.dir(input);

// const btn = document.querySelector('.js-btn');
// btn.hidden = true;
// btn.hidden = false;
// btn.disabled = true
// btn.disabled = false;
// btn.setAttribute('hidden', true );
// btn.removeAttribute('hidden');
// console.log(btn.getAttribute('hidden'));

// btn.setAttribute('data-id', 24)
// btn.setAttribute('data-goods-id', 2)
// btn.setAttribute('data-test-id', 3)


// const {goodsId, id, testId} = btn.dataset;
// console.log(goodsId);
// console.log(id);
// console.log(testId);

// console.dir(btn);




















// const cars = [
//     {
//         model: "Honda",
//         type: "Civic",
//         price: 12000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//     },
//     {
//         model: "Audi",
//         type: "Q7",
//         price: 40000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//     },
//     {
//         model: "BMW",
//         type: "5 series",
//         price: 9000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//     },
//     {
//         model: "Honda",
//         type: "Accord",
//         price: 20000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//     },
//     {
//         model: "Volvo",
//         type: "XC60",
//         price: 7000,
//         img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//     },
//     {
//         model: "Honda",
//         type: "Civic",
//         price: 12000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//     },
//     {
//         model: "Audi",
//         type: "Q7",
//         price: 40000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//     },
//     {
//         model: "BMW",
//         type: "5 siries",
//         price: 9000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//     },
//     {
//         model: "Honda",
//         type: "Accord",
//         price: 20000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//     },
//     {
//         model: "Volvo",
//         type: "XC60",
//         price: 7000,
//         img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//     },
//     {
//         model: "Honda",
//         type: "Civic",
//         price: 12000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//     },
//     {
//         model: "Audi",
//         type: "Q7",
//         price: 40000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//     },
//     {
//         model: "BMW",
//         type: "5 siries",
//         price: 9000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//     },
//     {
//         model: "Honda",
//         type: "Accord",
//         price: 20000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//     },
//     {
//         model: "Volvo",
//         type: "XC60",
//         price: 7000,
//         img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//     },
//     {
//         model: "Honda",
//         type: "Civic",
//         price: 12000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//     },
//     {
//         model: "Audi",
//         type: "Q7",
//         price: 40000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//     },
//     {
//         model: "BMW",
//         type: "5 siries",
//         price: 9000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//     },
//     {
//         model: "Honda",
//         type: "Accord",
//         price: 20000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//     },
//     {
//         model: "Volvo",
//         type: "XC60",
//         price: 7000,
//         img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//     },
//     {
//         model: "Honda",
//         type: "Civic",
//         price: 12000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//     },
//     {
//         model: "Audi",
//         type: "Q7",
//         price: 40000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//     },
//     {
//         model: "BMW",
//         type: "5 siries",
//         price: 9000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//     },
//     {
//         model: "Honda",
//         type: "Accord",
//         price: 20000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//     },
//     {
//         model: "Volvo",
//         type: "XC60",
//         price: 7000,
//         img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//     },
//     {
//         model: "Honda",
//         type: "Civic",
//         price: 12000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//     },
//     {
//         model: "Audi",
//         type: "Q7",
//         price: 40000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//     },
//     {
//         model: "BMW",
//         type: "5 siries",
//         price: 9000,
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//     },
//     {
//         model: "Honda",
//         type: "Accord",
//         price: 20000,
//         img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//     },
//     {
//         model: "Volvo",
//         type: "XC60",
//         price: 7000,
//         img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//     },
// ];



// {
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
// }
// console.log(cars.length);
// const list = document.querySelector('.js-list')

// function createMarkup(arr) {
//     const markup = arr.map(({ model, type, price, img }) => {
//         const li = document.createElement('li');
//         const imgEl = document.createElement('img');
//         const h2 = document.createElement('h2');
//         const h3 = document.createElement('h3');
//         const span = document.createElement('span');

//         imgEl.src = img;
//         imgEl.alt = model;
//         imgEl.style.width = '300px';

//         h2.textContent = model;
//         h3.textContent = type;
//         span.textContent = price;

//         li.append(imgEl, h2, h3, span);

//         return li;
//     })
//     console.log(markup);

//     list.append(...markup)
// }

// createMarkup(cars)


// const list = document.querySelector('.js-list');
// // {
// //     model: "Honda",
// //     type: "Civic",
// //     price: 12000,
// //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
// // }
// function createMarkup(arr) {
//     const markup = arr.map(({ model, type, price, img }) => `<li>
//         <img src="${img}" alt="${model}"  width="300"/>
//         <h2>${model}</h2>
//         <h3>${type}</h3>
//         <span>${price}</span>
//   </li>`).join('')

//     list.insertAdjacentHTML('beforeend', markup)
//     console.log(markup);
// }

// createMarkup(cars)


// const sectionEl = document.querySelector(".section")
// sectionEl.addEventListener('click', handkerClick);

// function handkerClick(evt) {

//     if (evt.target.nodeName !== "BUTTON") {
//         return;
//     }

//     const btn1 = evt.target.cloneNode();
//     const btn2 = evt.target.cloneNode();
//     btn1.textContent = "click";
//     btn2.textContent = "click";


//     evt.target.remove()
//     console.log(btn1);
//     sectionEl.append(btn1, btn2)

// }



(function (e) {
    'function' != typeof e.matches &&
        (e.matches =
            e.msMatchesSelector ||
            e.mozMatchesSelector ||
            e.webkitMatchesSelector ||
            function (e) {
                for (
                    var t = this,
                    o = (t.document || t.ownerDocument).querySelectorAll(e),
                    n = 0;
                    o[n] && o[n] !== t;

                )
                    ++n;
                return Boolean(o[n]);
            }),
        'function' != typeof e.closest &&
        (e.closest = function (e) {
            for (var t = this; t && 1 === t.nodeType;) {
                if (t.matches(e)) return t;
                t = t.parentNode;
            }
            return null;
        });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay = document.querySelector('#overlay-modal-1'),
        closeButtons = document.querySelectorAll('.js-modal-close');

    modalButtons.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector(
                    '.modal-1[data-modal="' + modalId + '"]'
                );

            modalElem.classList.add('active-1');
            overlay.classList.add('active-1');
            document.body.classList.add('active-1');
        });
    });

    closeButtons.forEach(function (item) {
        item.addEventListener('click', function (e) {
            var parentModal = this.closest('.modal-1');

            parentModal.classList.remove('active-1');
            overlay.classList.remove('active-1');
            document.body.classList.remove('active-1');
        });
    });

    document.body.addEventListener(
        'keyup',
        function (e) {
            var key = e.keyCode;

            if (key == 27) {
                document.querySelector('.modal.active-1').classList.remove('active-1');
                document.querySelector('.overlay-1').classList.remove('active-1');
                document.body.classList.remove('active-1');
            }
        },
        false
    );

    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active-1').classList.remove('active-1');
        this.classList.remove('active-1');
        document.body.classList.remove('active-1');
    });
});