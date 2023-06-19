
// const array = ["Hello world", null, true, 15];


// console.log(typeof array); // object

// console.log(Array.isArray(array)); // true

// console.log(Array.isArray("hello")); // false



// const firstEl = array[0];
// lastEl
// const lastIDX = array.length - 1;
// const lastEl = array[array.length - 1];
// console.log(lastEl);



// const array = ["Hello world", null, true, 15];

// for (let i = 0; i < array.length; i+=1){
//     const item = array[i]
//     console.log(item);
// }


// for(const item of array){
//     console.log(item);
// }



// const array = [null, true, "Hello world", 15, undefined, 'ok'];

// for (let i = 0; i < array.length; i += 1) {
//     if (typeof array[i] === 'string') {
//         array[i] = false;
//     }
// }

// for (let item of array) {
//     if (typeof item === 'string') {
//         item = false;
//     }
//     console.log(item);
// }
// console.log(array);



// Примітивні типи даних - за значенням
// console.log(1 === 1);
// console.log([1] === [1]);


// let a = 15;
// let b = a;

// b += 1;

// console.log(a);
// console.log(b);
// console.log(a === b);




// Складні типи даних - за посиланням
// let a = [1,2,3];
// let b = a;

// b.push(4)


// console.log('a',a);
// console.log('b',b);

// console.log(a === b);





// push pop
// const numbers = [1, 2, 3];
// // numbers.push(4);
// const result = numbers.pop();
// console.log(result);
// console.log(numbers);


// unshift shift

// const numbers = [1, 2, 3];
// numbers.unshift(4,5,6)
// const result = numbers.shift();
// console.log(result);
// console.log(numbers);





//slice
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.slice(2, 5);
// console.log(result);
// console.log(numbers);

// splice


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.splice(2,2)
// console.log(result);
// console.log(numbers);

// numbers.splice(2, 1, 'hello world', false)
// console.log(numbers);


// numbers.splice(2, 0, 'hello world')
// console.log(numbers);


//includes
// const str = ['a', 'b', 'c', 'd'];

// console.log(str.includes('c')); // true
// console.log(str.includes('e')); // false

//indexOf
// const str = ['a', 'b', 'c', 'd','c'];

// console.log(str.indexOf('c'));//2
// console.log(str.indexOf('e'));//-1

// console.log(str.indexOf('e') !== -1);


// concat
// const str = ['a', 'b', 'c', 'd', 'c'];
// const strA = ['g', 'h'];
// const strB = ['w', 'e'];


// const result = str.concat(strA, strB);
// console.log(result);
// console.log(str);











// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arrA = [3, 'Hello', null, 42, false];


// console.log(typeof null);
// for (let i = 0; i < arrA.length; i += 1) {
//     if (typeof arrA[i] !== 'number') {
//         arrA.splice(i, 1);
//         i -= 1;
//     }
// }

// console.log(arrA);

// const arrA = [3, 'Hello', null, 42, false];

// [3, 'Hello', null, 42, false]

// for (let i = arrA.length - 1; i >= 0; i -= 1) {
//     console.log(arrA[i]);
//     if (typeof arrA[i] !== 'number') {
//         arrA.splice(i, 1);
//     }
// }
// console.log(arrA);






// const arrB = ['world', true, 22, 41, undefined];










// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// function getCommonElements(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr.includes(arr[i], i + 1)) {
//             result.push(arr[i])
//         }
//     }

//     return result
// }

// console.log(getCommonElements([1, 2, 3, 2, 1, 17, 19]));




// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];

// function getWomen(users, men) {
//     const women = [];

//     for (const user of users) {
//         if (!men.includes(user)) {
//             women.push(user)
//         }
//     }

//     return women
// }

// console.log(getWomen(users, men));








// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';
// const SEPARATOR = '';
// const result = string.split(SEPARATOR).reverse().join(SEPARATOR)
// console.log(result);




// Task-5
// Напиши скрипт який буде перевіряти чи елементи в масиві розташовані в порядку зростання,
// якщо ні то замінювати елемент на вірнi
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9]

// for (let i = 1; i < numbers.length; i += 1) {
//     const currentEl = numbers[i];
//     const prevEl = numbers[i - 1];
//     if (currentEl - prevEl !== 1) {
//         numbers[i] = numbers[i - 1] + 1;
//     }
// }
// console.log(numbers);


// Task-6
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


function createStr(arr) {
    let message;
    switch (arr.length) {
        case 0:
            message = "no one likes this"
            break;
        case 1:
            message = `${arr[0]} likes this`
            break;
        case 2:
            message = `${arr[0]} and ${arr[1]} like this`
            break;
        case 3:
            message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
            break;
        default:
            message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
    }
    return message;
}

console.log(createStr([]));
console.log(createStr(["Peter"]));
console.log(createStr(["Jacob", "Alex"]));
console.log(createStr(["Max", "John", "Mark"]));
console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));