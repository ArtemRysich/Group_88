// https://www.geeksforgeeks.org/lodash-_-clonedeep-method/

// http://www.circle-lutsk.pp.ua/js_recursion.html



// const arr = [1, 2, 3, 4, 5];
// // const first = arr[0];
// // const second = arr[1];
// // console.log(second);


// const [first, , second, , third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);


// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }
// console.log(user.skills.html);
// const { skills: { html } } = user;
// const { skills, skills: { html, css, js } } = user

// console.log('skills', skills);
// console.log("html", html);



// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }
// const css = 'i don`t know';
// const { skills: { css : cssLanguage } } = user;
// // const { html } = user.skills;
// // console.log(html);

// // console.log(css);
// console.log(cssLanguage);
// // console.log(user);
// console.log(user.skills.css);


// const user = {
//     name: 'Test name',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }
// const user2 = {
//     name: 'Artem',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }

// function getUserName({ name, skills: { html, css, js } } = {}) {
//     console.log(`Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// getUserName(user)
// getUserName(user2)


// function getUserName(obj) {
//     console.log(`Hello my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`);
// }

// getUserName(user)



// const users = [{ name: 'Kate' }, { name: 'Alex' }, { name: 'Mark' }];

// const names = [];
// for (const { name } of users){
//     names.push(name)
// }
//     // for (const user of users) {
//     //     names.push(user.name)
//     // }

//     console.log(names);



// const arr = [1, 2, 3];
// const arr2 = [...arr]; //spread
// arr.splice(0, 1)
// console.log(arr === arr2);
// console.log('arr', arr);
// console.log('arr2', arr2);


// const arr = [1, 2, 3];
// const [first, ...args] = arr; // rest

// console.log(first);
// console.log(args);
// console.log('arr',arr);


// function foo(...props){//rest

// }
// foo(...arr)// spread


// const arr = [1, 2, 3];

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }
// function foo(first, second, third) {
//     console.log('first', first);
//     console.log('second', second);
//     console.log('third', third);
// }
// foo('a', 'b', 'c')
// foo(...arr)
// foo(...arr)// foo(1, 2, 3)




// function foo(a, b, ...args) {
//     console.log(args);
//     console.log(arguments);
// }



// foo(1, 2, 3, 4)
// foo(1, 2)
// foo(1, 2, 3, 4, 5, 6, 7, 8)

// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }



// function foo({ name, skills: { html, ...props }, ...props2}) {
//     console.log(name);
//     console.log(html);
//     console.log(props);
//     console.log(props2);
// }
// foo(user)

// function foo({ name, age, ...props }) {
//     console.log(name);
//     console.log(age);
//     console.log(props);
// }
// foo(user)



// const user = {
//     name: 'Test name',
//     age: 22,
//     city: 'Lviv',
//     skills: {
//         html: true,
//         css: false,
//         js: true
//     }
// }


// const copy = { ...user }
// console.log('user', user);
// console.log('copy', copy);
// console.log(copy === user);
// console.log(copy.skills === user.skills);













// Task - 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({ weight, height }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(calcBMI({
//     weight: '88,3',
//     height: '1.75'
// }));





// Task - 2 - Операція spread
// Напиши функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.



// function createContact(partialContact) {
//     return {
//         id: Math.random(),
//         createdAt: new Date(),
//         list: 'default',
//         ...partialContact
//     }
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );




// Task - 3 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// function transformUsername({ firstName, lastName, ...props }) {
//     return {
//         fullName: `${firstName} ${lastName}`,
//         ...props
//     }
// }


// function transformUsername(obj) {
//     const changeKeys = ['firstName', 'lastName'];
//     const keys = Object.keys(obj);
//     const result = {
//         fullName: ''
//     };

//     for (const key of keys) {
//         if (changeKeys.includes(key)) {
//             // result.fullName ? result.fullName += ` ${obj[key]}` : result.fullName = obj[key]
//             result.fullName += `${obj[key]} `
//         } else {
//             result[key] = obj[key]
//         }
//     }
//     console.log(result);
// }

// function transformUsername(obj) {
//     const changeKeys = ['firstName', 'lastName'];
//     const keys = Object.keys(obj);
//     const result = {
//         fullName: `${obj.firstName} ${obj.lastName}`
//     };

//     for (const key of keys) {
//         if (!changeKeys.includes(key)) {
//             result[key] = obj[key]
//         }
//     }
//     return result;
// }


// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );


// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );


// Task - 4 - Деструктуризація
// Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({ companyName, stock }) {
//     const values = Object.values(stock)
//     let total = 0;

//     for(const value of values){
//         total += value
//     }
//     return `${companyName} has ${total} items in stock`;
// }

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"//



// const rgb = ['122', '180', '255'];
// const [, , blue] = rgb;


// console.log(`Blue ${' '}`); // Blue 255 // Blue  



// Вопрос по глубокому копированию, 
// функция будет вызывать сама себя, в стеке вызовов будет еще один вызов функции?

// obj {
//   x: 2,
//   y {a: [  ], b: { a: 0, b: 1, с: 2 } }
//   z: {a: 0, b: 1, с: 2}
//     }

// function copyArr(arr){
//   var res = [];
//   for (var i in arr) { res.push(arr[i]); }
//   return res;
// }
// function copyObj(obj){
//   res = {};
//   for (var key in obj) {
//     if (typeof obj[key] === 'object') {
//       if (obj[key].length !== undefined) {
//         res[key] = copyArr(obj[key]);
//       } else {
//         res[key] = copyObj(obj[key]);
//       }
//     } else {
//       res[key] = obj[key];
//     }
//   }
//   return res;
// }


// const numbers = [1, 2, 3, [5, [9, 9], 6]];
// [5, 18, 6] =>29
// [9, 9] => 18
// function sum(arr) {
//     let total = 0;

//     for (const num of arr) {
//         if (Array.isArray(num)) {
//             total += sum(num)
//         } else {
//             total += num;
//         }
//     }
//     return total;
// }
// console.log(sum(numbers));




