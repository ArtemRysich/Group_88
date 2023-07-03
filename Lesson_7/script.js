// Arrow function
// expression()//error
// const expression = function (){

// }

// const arrow = () => {
//     console.log('hello');
// }
// arrow()


// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(5, 6));


// const sum = (a, b) =>  a + b
// console.log(sum(5, 6));


// const sum = a =>  a + 6
// console.log(sum(5));



// const foo = (...args) => {
//     // console.log(arguments);
//     console.log(args);
// }

// foo(1, 2, 3, 4, 5, 6)



// const user = {
//     name: 'Test user',
//     // getName(){
//     //     console.log(this.name);
//     // }
//     getName: () => {
//         console.log(this);
//     }
// }
// user.getName()



// const foo = array => console.log(array);

// foo([1, 2, 3, 4])
// foo(['a', 'b', 'c'])



// Callback function



// function add(a, b) {
//     return a + b
// }


// console.log(add(5, 5));
// console.log(add);




// function logResult(a, b, callback) {
//     console.log(callback);
//     const result = callback(a, b);
//     console.log(`Result is ${result}`);
// }

// logResult(4, 5, (a, b) => a + b)
// logResult(4, 5, (a, b) => a * b)

// logResult(4, 5, add)
// logResult(4, 5, sum)


// // callback function
// function add(a, b) {
//     return a + b
// }

// function sum(a, b) {
//     return a * b;
// }










// forEach

// const arr = [1, 2, 3, 4, 5];

// // function 

// const array = {
//     customForEach(arr, callback) {
//         for (let i = 0; i < arr.length; i += 1) {
//             callback(arr[i], i, arr)
//         }
//     }
// }
// customForEach(arr, callback)
// function callback(elem, idx, array) {
//     if (elem === 3) {
//         array.splice(idx, 1)
//     }
// }

// arr.forEach((elem, idx, array) => {
//     if (elem === 3) {
//         array.splice(idx, 1);
//     }
//     // return 'Hello world';
//     return elem * elem
// })

// console.log(arr);





















// Task - 1
// Створи стрілочну функцію logItems(), яка виводить в консоль елементи масива, зроби перебір за допомогою методу forEach().



// const logItems = arr => arr.forEach((item, idx)=> console.log(`${idx + 1} - ${item}`))



// // logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);



// Task - 2
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//     const product = {
//         id: Date.now(),
//         ...obj
//     }
//     callback(product)
// }

// // function logProduct(product) {
// //     console.log(`Product`, product);
// // }

// // function logTotalPrice({ price, quantity }) {
// //     console.log(`Product total price ${price * quantity}`);

// // }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);





// Task - 3
// Напишіть функцію яка буде отримувати 2 параметри.
// 1 - масив чисел.
// 2 - функцію яка має опрацювати кожен елемент масиву.
// Функція повертає новий масив кожен елемент якого є результатом виконання колбек функції
// function each(arr, action) {
//     const items = [];

//     arr.forEach(elem => {
//         const result = action(elem);
//         items.push(result);
//     })

//     // arr.forEach(elem => items.push(action(elem)))

//     return items
// }

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));



// Task-4
// Напишіть функцію getProductDetails, яка приймає ідентифікатор товару productId та дві колбек-функції successCallback та errorCallback. Функція getProductDetails повинна отримати деталі про вказаний товар та передати їх у successCallback.  У випадку помилки, викликається errorCallback і передається повідомлення про помилку.
// const products = [
//     {
//         id: 1,
//         name: "Телефон",
//         price: 10000,
//         description: "Смартфон з високоякісним дисплеєм та потужним процесором.",
//     },
//     {
//         id: 2,
//         name: "Ноутбук",
//         price: 25000,
//         description: "Легкий та потужний ноутбук для роботи та розваг.",
//     },
//     {
//         id: 3,
//         name: "Планшет",
//         price: 8000,
//         description: "Компактний планшет для перегляду контенту.",
//     },
// ];

// function getProductDetails(id, success, error) {
//     for (const product of products) {
//         if (product.id === id) {
//             return success(product); //some value;
//         }
//     }

//     error(id);
// }

// getProductDetails(3, handleSuccess, handleError)
// // getProductDetails(44, handleSuccess, handleError)

// function handleSuccess(message) {
//     console.log(`✅ Success!`, message);
// }

// function handleError(productId) {
//     console.log(`❌ Error! Product with ${productId} id not found`);
// }






// const arr = [1, 2, [5, 6, [2, 2]]];
// [1, 2]; // 18
// [5, 6]; //15
// [2, 2]; //4

// function add(arr) {
//     let total =0;
//     for (const value of arr) {
//         if (Array.isArray(value)) {
//             total += add(value)
//         } else {
//             total += value
//         }
//     }
//     return total;
// }

// console.log(add(arr));



// const arr = [1, 2, [5, 'hello', 6, [2, 'world', { a: 22, b: 25 }, 2]]];
// [1, 2]; // 18
// [5, 6]; //15
// [2, 2]; //4

// function add(arr) {
//     let total = 0;
//     for (const value of arr) {
//         if (Array.isArray(value)) {
//             total += add(value)
//         } else if (typeof value === 'number') {
//             total += value
//         } else if (typeof value === 'object') {
//             const values = Object.values(value);
//             total += add(values)
//         }
//     }
//     return total;
// }

// console.log(add(arr));





// чи можна буде буль ласка розглянути цю задачу(знайшов в інтернеті і був впевнений що відповідь буде 123)
// const a = {}
// const b = {
//     key: 'b'
// }
// const c = {
//     key: 'c'
// }
// console.log(`${a}`);
// a[b] = 123;
// a[c] = 456;
// console.log(a);
// console.log(a[b])
// чому в результаті в консолі буде 456 ? і що скажете на рахунок цієї доки https://uk.javascript.info/ , чи краше читати тільки mdn?