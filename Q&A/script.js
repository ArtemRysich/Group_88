// Можна пояснити це завдання про Рекурсію, проходив завдання на фрикодкємп і зовсім не зрозумів як це працює 
// function sum(arr, n) {
//     if (n <= 0) {
//         return 0;
//     } else {
//         return sum(arr, n - 1) + arr[n - 1];
//     }
// }
// console.log(sum([1], 0)); //має дорівнювати 0.
// console.log(sum([2, 3, 4], 1)); //має дорівнювати 2.
// console.log(sum([2, 3, 4, 5], 3)); //має дорівнювати 9.



// Пройдено:Ви повинні використати рекурсію, щоб розв’язати це завдання
// І таке питання чи юзають такий підхід на практиці ?


// function foo() {
//     const value = 10;
//     const arr = [1, 2, 3, 4, 5];

//     return function (a) {
//         console.log(arr);
//         const sum = a + value
//         return sum
//     }
// }

// const result = foo();
// console.log(result);

// console.log(result(5));


// const arr = [1, 2, 3, 4, 5];

// const callback = (item) => {
//     return item * 2
// }
// console.log(callback);
// const result = arr.map(callback)

// console.log('map', result);



// function customMap(arr, callback) {
//     const newArr = []
//     for (let i = 0; i < arr.length; i += 1) {
//         const value = callback(arr[i])
//         newArr.push(value)
//     }
//     return newArr;
// }

// console.log('customMap', customMap(arr, callback));


// const user = {
//     name: 'User name',
//     age: 'user age',
//     sayHello() {

//     }
// }




// const olga = new User('Olga', 18);
// olga.sayHello();

// const artem = new User('Artem', 28);
// console.log(artem);

// function user(name, age) {
//     this._name = name;
//     this.age = age;
//
//     return this;
// }



// class User {
//     static role = {
//         user: 'User',
//         admin: 'Admin'
//     }
//     #name
//     constructor(name, age) {
//         this.#name = name;
//         this.age = age;
//         this.role = User.role.user;
//     }
//     sayHello() {
//         console.log(`Hello my name is ${this.#name}`);
//     }
// }


// const artem = new User('Artem', 28);
// artem.sayHello();
// console.log(artem);


// console.log(artem);





// function login(password) {
//     let result = 'Error';

//     if (password !== 'hello') {
//         return result;
//     }
//     const message = prompt('Age ?')

//     if (!message) { // null // ''
//         return result;
//     }

//     if (+message < 18) {
//         return result;
//     }




// }


// console.log(login('qwerty111'));



// const items = ['1', '2', '3'];

// let total = 0
// for (const item of items) {
//     total += Number(item)
// }
// console.log(total);

// function sayHello() {
//     console.log(this.age);
// }

// // const sayHello = () => {
// //     console.log(this);
// // }

// const user = {
//     age: 'User name',
//     method: sayHello
// }
// user.method()

// const user2 = {
//     age: 'Test user',
//     method: sayHello
// }

// user2.method()


// const arr = ['a', 'b', 'c', 's', 'd'];
// console.log(arr);

// console.log(Object.getOwnPropertyNames(arr));
// console.log(Object.keys(arr));



// Задача з кахуту (практика) 
// const numbers = [5, 10, 25, 15];
// numbers.forEach(
//     function (number) {
//         console.log(this.a);
//     },
//     { a: 'I am Grot' },
// );

// Як я зрозумів першим параметром forEach передається колбек функція а другим обєкт а.  Обєкат а не знаходиться в тілі колбекфункції
// 1.        Не зовсім зрозуміло чого  this ссилається на обєкт. (видає 4 рази I m Grot)
// 2.        Чого в прикладі наведеному нижче this вже не силається на обєкт (видає 4 рази undefaind)
// const numbers = [5, 10, 25, 15];
// numbers.forEach(
//     function (number) {
//         console.log(this);
//         console.log(b);
//         console.log(c);
//     },
//     (b = 'i  am Alex'),
//     { a: 'i am Grot' },
//     (c = 'i  am Mark'))



// class User {
//     email;
//     constructor({ email }) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
// });

// console.log(mango.email); // "mango@mail.com"
// mango.email = 'newEmail.com';
// console.log(mango.email)



// let fn = function (x) {
//     alert(x)
// }


// (function () { }(
//     fn(1)
// ))()



// function fn() {
//     console.log(this);
// }
// // fn()

// // fn.call({ name: 'user' })


// const copy = fn.bind({ name: 'user' })
// console.log(copy);
// copy()
// copy()
// copy()
// copy()
// fn()


// const list = document.querySelector('.js-list');
// [...list.children].forEach((item) => console.log(item.textContent))
// console.dir(list);


// const arr = [11, 23, 44, 5, 22]
// arr.sort()

// console.log(arr);










// Як видалити наприклад другий ключ і значення в обʼєкті ? 

// const obj = {
//     a: 'значення1',
//     b: 'значення2',
//     c: 'значення3'
// };

// const arr = Object.entries(obj);

// delete obj.b

// console.log(obj);

// const obj = Object.fromEntries(масив);

// Приклад:
//Напишіть функцію updateObject, яка приймає об'єкт та повертає
//новий об'єкт без зазначеного параметра
//Очікуваний результат ({a: 1. b: 2}, 'b') => {a: 1}
// const obj = { a: 1, b: 2 };
// function updateObject(obj, delValue) {
//     // const newArr = [];
//     // const arrs = Object.entries(obj);
//     // //   console.log(arrs);
//     // for (const arr of arrs) {
//     //     if (!arr.includes(delValue)) {
//     //         newArr.push(arr);
//     //     }
//     // }
//     // return Object.fromEntries(newArr);


//     return Object.keys(obj).reduce((acc, key) => {
//         if (key !== delValue) {
//             acc[key] = obj[key];
//         }
//         return acc
//     }, {})
//     // for (const key in obj) {
//     //     if (key === delValue) {
//     //         delete obj[key]
//     //     }
//     // }
//     // return obj;
// }
// console.log(updateObject(obj, "b"));



// class User {
//     constructor(name) {
//         this.name = name
//     }
// }


// const artem = new User()





// const arr = [1, 2, 3, 4, 5];

// const result = arr.map(item => item * 2);
// console.log(result);
// const result = arr.filter(item => item > 2);
// console.log(result);

// const result1 = arr.reduce((acc, item) => {
//     acc.push(item * 2);
//     return acc;
// }, []);


// console.log(result1);


// const result1 = arr.reduce((acc, item) => {
//     if (item > 2) {
//         acc.push(item);
//     }

//     return acc;
// }, []);


// console.log(result1);



// Завдання з codewars, завдання: знайти середину рядка.Я вирішив так:
// function getMiddle(s) {
//     const middle = Math.ceil(s.length / 2)
//     return (s.length / 2) === middle ? `${s[middle - 1]}${s[middle]}` : s[middle - 1]
// }
// , у рішеннях побачив такий варіант: 
// function getMiddle(s) {
    // return s.slice((s.length - 1) / 2, s.length / 2 + 1);


    //abcddefg
    // idx 7 / 2 = 3
    // 8 / 2 + 1 = 5
// }
// Наскільки я зрозумів, метод slice() має в собі Math.floor? (У другому варіанті рішення)