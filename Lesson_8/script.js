// const users = [
//     { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//     { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//     { id: 3, name: 'Bob', age: 24, skills: ['JavaScript', 'React', 'Node.js'] },
//     { id: 4, name: 'Emily', age: 40, skills: ['Java', 'Spring'] },
//     { id: 5, name: 'David', age: 22, skills: ['C++', 'C#'] }
// ];


// map
// const names = users.map((user, idx, arr)=>{
//     return user.name
// })
// const names = users.map(({ name }) => name)
// console.log(names);

// function customMap(arr) {
//     const result = []
//     for (let i = 0; i < arr.length; i += 1) {
//         result.push(callback(arr[i]))
//     }
//     return result;
// }

// const callback = ({name}) => name
// console.log(customMap(users));

// flatMap
// const result = users.flatMap(({skills}) => skills)
// console.log(result);

// flat
// const arr1 = [0, 1, 2, [3, [4, [45]]]];
// const resut = arr1.flat(3)
// console.log(resut);

// filter
// const result = users.filter(({ age }) => age > 30);
// console.log(result);

// const skills = users.flatMap(({ skills }) => skills);
// console.log(skills);
// const uniqueSkills = skills.filter(
//     (skill, index, array) => {
//         // console.log(skill, 'idx', index);
//         return array.indexOf(skill) === index
//     }
// );


// console.log(uniqueSkills);

// find
// const result = users.find(({ skills }) => skills.includes('Java'))
// console.log(result);

// findIndex

// const idx = users.findIndex(({ id }) => id === 3);
// const idx = users.findIndex(({ skills }) => skills.includes('Python'));
// users.splice(idx, 1)
// console.log(idx);
// console.log(users);


// every some
// const users = [
//     { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//     { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//     { id: 3, name: 'Bob', age: 24, skills: ['Java', 'React', 'Node.js'] },
//     { id: 4, name: 'Emily', age: 40, skills: ['Java', 'HTML'] },
//     { id: 5, name: 'David', age: 22, skills: ['C++', 'CSS'] }
// ];

// const isKnow = users.some(({skills}) => skills.includes('Python'))
// console.log(isKnow);


// const result = users.every(({ age }) => age > 20 && age <= 40)
// console.log(result);



// sort
// const users = [
//     { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//     { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//     { id: 3, name: 'Bob', age: 24, skills: ['Java', 'React', 'Node.js'] },
//     { id: 4, name: 'Emily', age: 40, skills: ['Java', 'HTML'] },
//     { id: 5, name: 'David', age: 22, skills: ['C++', 'CSS'] }
// ];

// const result = users.sort((a, b) => b.age - a.age);
// console.log(users);

// const result = users.sort((a, b) => b.name.localeCompare(a.name))
// console.log(result);



// reduce
// const users = [
//     { id: 1, name: 'John', age: 28, skills: ['JavaScript', 'HTML', 'CSS'] },
//     { id: 2, name: 'Alice', age: 32, skills: ['Python', 'Data Analysis'] },
//     { id: 3, name: 'Bob', age: 24, skills: ['Java', 'React', 'Node.js'] },
//     { id: 4, name: 'Emily', age: 40, skills: ['Java', 'HTML'] },
//     { id: 5, name: 'David', age: 22, skills: ['C++', 'CSS'] }
// ];


// const result = users.reduce((acc, { age }, idx, arr) => acc + age, 0);
// const result = users.reduce((acc, { name }) => {
//     acc.push(name);
//     return acc
// }, [])
// console.log(result);




// Перерва до 21.28






// Практика

// Task-1
// Напишіть функцію, яка використовує метод map, щоб створити новий масив об'єктів, в якому буде інформація про середній бал кожного студента. 

// const students = [
//     { name: 'John', grades: [80, 85, 90] },
//     { name: 'Alice', grades: [90, 95, 92] },
//     { name: 'Bob', grades: [70, 80, 75] },
//     { name: 'Emily', grades: [95, 92, 88] },
//     { name: 'David', grades: [85, 88, 90] }
// ];

// function getAverage(arr) {
//     const result = arr.map(({ name, grades }) => {
//         const total = grades.reduce((acc, item) => acc + item, 0)
//         const obj = {
//             name,
//             average: Math.round(total / grades.length)
//         }
//         return obj
//     });

//     return result;
// }
// console.log(getAverage(students));


// Task-2
// Напишіть функцію, яка використовує метод filter, щоб створити новий масив, в якому будуть тільки студенти які старше 20 років


// const students = [
//     { name: 'John', age: 20, gpa: 3.8 },
//     { name: 'Alice', age: 21, gpa: 3.2 },
//     { name: 'Bob', age: 19, gpa: 3.5 },
//     { name: 'Emily', age: 22, gpa: 3.9 },
//     { name: 'David', age: 20, gpa: 3.7 }
// ];

// function getAdult(arr) {
//     // const result = arr.filter((student) => student.age > 20)

//     // return result;

//    return arr.filter(({age}) => age > 20)

// }
// console.log(getAdult(students));


// Task-3
// Напишіть функцію, яка використовує метод find, щоб знайти книжку за її назвою (title)
// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];


// function getBook(arr, title) {
//     // const book = arr.find((book) => book.title === title);

// return book ? book : 'Not found'
//     // return book || 'Not found';


//   return arr.find(({title : bookTitle}) => bookTitle === title) || 'Not found';
// }
// console.log(getBook(books, 'Design Patterns: Elements of Reusable Object-Oriented Software'));
// console.log(getBook(books, 'qwerty'));


// Task-4
// Напишіть функцію, яка використовує метод reduce, щоб обчислити загальну вартість всіх товарів у масиві, яка розраховується як добуток ціни товару на його кількість, а потім сумується з іншими товарами. Результат повинен бути загальною вартістю всіх товарів.

// const products = [
//     { id: 1, name: 'T-shirt', price: 20, quantity: 3 },
//     { id: 2, name: 'Jeans', price: 50, quantity: 2 },
//     { id: 3, name: 'Sneakers', price: 80, quantity: 1 },
//     { id: 4, name: 'Hat', price: 15, quantity: 4 },
//     { id: 5, name: 'Socks', price: 5, quantity: 6 }
// ];

// function getTotal(arr) {
//     const total = arr.reduce((acc, product) => {
//         acc += product.price * product.quantity;
//         return acc;
//     }, 0)

//     return total;

//     // return arr.reduce((acc, { price, quantity }) => acc += price * quantity, 0)
// }
// console.log(getTotal(products));



// Task-5
// Напишіть функцію, яка використовує метод sort, щоб відсортувати книжки за роком видання у спадаючому порядку. Результат повинен бути відсортованим масивом книжок за роком видання.


// const books = [
//     { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
//     { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin', year: 2008 },
//     { title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas', year: 1999 },
//     { title: 'Design Patterns: Elements of Reusable Object-Oriented Software', author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides', year: 1994 },
//     { title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler', year: 1999 }
// ];

// function sortDesc(arr) {
//     // const result = [...arr].sort((a, b) => b.year - a.year);
//     // return result;


//     return [...arr].sort((a, b) => b.year - a.year)
//     // .map(({ author, year }) => ({ author, year }));

// }
// console.log(sortDesc(books));


// Task-6
// Напишіть функцію, яка використовує перебираючі методи масиву map та filter, щоб отримати масив назв продуктів, ціна яких менше 2 доларів та відсортуй їх за алфавітним порядком.
// const products = [
//     { id: 2, name: 'Banana', price: 0.99 },
//     { id: 1, name: 'Apple', price: 1.99 },
//     { id: 3, name: 'Orange', price: 2.49 },
//     { id: 4, name: 'Grapes', price: 3.99 }
// ];

// function getProducts(arr) {
//     // const min = arr.filter((product) => product.price < 2);
//     // const names = min.map((product) => product.name);
//     // names.sort((a, b) => a.localeCompare(b));

//     // return names

//     return arr.filter(({ price }) => price < 2)
//     .map(({ name }) => name)
//     .sort((a,b) => a.localeCompare(b));
// }
// console.log(getProducts(products));
// console.log(products);

// Task-7 HARD 😈

// Є рядок в якому довільна кількість літер, гарантовано в рядку немає пробілів та розділових знаків, потрібно повернути об'єкт де кожна літера буде ключем, а кількість разів яку вона дублюється буде значенням ключа
const str = 'absdabsrgbadgtdswwbetflg';
// Результат на який очікуємо
// const obj = {
//     a: 3,
//     b: 4,
//     s: 3,
//     // ...
// }
// const obj = str.split('')
//     .reduce((acc, item) => {
//         if (acc.hasOwnProperty(item)) { // item in acc
//             acc[item] += 1;
//         } else {
//             acc[item] = 1
//         }

//         return acc
//     }, {})

// console.log(obj);


// Артем вітаю. Допоможіть розібрати.
// const calculateTotalPrice = (orderedItems) => {
//     let result = 0;
//     orderedItems.forEach(number => {
//      result += number;
//     })
//     return result;
//   }
//    Що зробив помилково?



const numbers = [44, 1, 2, 3, 11, 22];
// numbers.sort()
numbers.sort((a, b) => a - b)
console.log(numbers);

