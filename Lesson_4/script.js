// Function expression
// const value = 12;

// const foo = function (valA, valB) {
// const sum = valA + valB;
// console.log(sum);
// }

// // foo(4, 5);
// // foo(21, 15);

// foo(value, 125);


// const numbers = [2, 3, 4, 5]

// function foo(valA) {
//     valA.splice(0,1)
//     return valA
// }

// console.log(foo);
// console.log(foo(numbers));

// let a = 12;
// let b = a;

// a += 20;

// console.log('a', a);
// console.log('b',b);

// const a = [1, 2, 3];
// const b = a;

// a.splice(0,1)
// console.log(a);
// console.log(b);

// Function declaration
// foo()
// function foo(){
// console.log('work');
// }



// hoisting https://codeguida.com/post/199






// Псевдомасив arguments
// function getSum() {
//     let sum = 0;
//     const arr = Array.from(arguments);
//     console.log(arr);
//     console.log(arguments);
//     for (const arg of arguments) {
//         sum += arg;

//         return sum;
//     }

//     for (const arg of arguments) {
//         console.log('arg loop 2', arg);

//     }
// }
// // getSum(5)
// const result = getSum(2, 3, 4, 5, 6);
// console.log(result);
// getSum(2, 3, 4, 5, 6)
// getSum(5, 6, 9, 0, 2, 4, 2, 5, 7, 3)




// Області видимості, присвоєння за посиланням та значенням

// // Example 1
// let someValue = 4;

// if (true) {
//     someValue = 11;
// }

// console.log(someValue);













// // Example 2
// let someValue = 4;

// if (true) {
//     let someValue = 11;
// }

// console.log(someValue);









//// Example 3
// let someValue = 4;

// if (true) {
//     if (true) {
//         someValue = 24;
//     }
//     let someValue = 11;
// }

// console.log(someValue);












// // Example 4
// let someValue = 2;


// function checkScope(someValue) { // let someValue = 2
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);


// Example 5
// let someValue = 2;


// function checkScope() {
//     someValue = 45;
//     return someValue;
// }

// checkScope(someValue)

// console.log(someValue);






// // Example 6
// let someValue = 2;


// function checkScope() {
//     someValue = 42;
//     return someValue;
// }

// checkScope()

// console.log(someValue);






// Example 7
// let someArray = ['Hello', 'my', 'name', 'scope'];


// function checkScope(arr) { // let arr = someArray;
//     arr.splice(0,3)
// }

// checkScope(someArray)

// console.log(someArray);

// let someArray = ['Hello', 'my', 'name', 'scope'];


// function checkScope(arr) { // let arr = someArray;
//     arr = Array.from(arr)
//     arr.splice(0,3)
// }

// checkScope(someArray)

// console.log(someArray);



// const name = 10;

// if (true) {
//     const name = 15;
//     console.log('block', name);
//     if (true) {
//         const name = 44;
//         console.log('block 2', name);
//     }
// }
// console.log('global',name);
// console.log(qwerty);


// https://developer.mozilla.org/en-US/docs/Web/API/Window/name





// function logItem(valA, valB) {
//     const result = getSum(valA, valB);
//     const message = `Result is ${result}`;
//     console.log(message);
// }

// function getSum(a, b) {
//     return a + b
// }


// logItem(5, 7)







// Перерва до 21.15














// Практика


// Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];
// Застосування функції

// function checkValue(arr, target) {
//     let message = "Success ✅";

//     for (const num of arr) {
//         if (target > num) {
//             message = "Fail ❌";
//         }
//     }

//     return message

// }
// console.log(checkValue(numbers, 10));

// console.log(checkValue(numbers, 13));




// Застосування функції + патерн раннє повернення

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//     for (const num of arr) {
//         if (target > num){
//             return "Fail ❌";
//         }
//     }

//     return "Success ✅";
// }

// console.log(checkValue(numbers, 10));

// console.log(checkValue(numbers, 13));


// Task-2
// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів


// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // [[1, 2], [3, 4],[5, 6],[7, 8]]

// function getCombination(arr, count) {
//     const result = [];

//     for (let i = 0; i < arr.length; i += count) {
//         const combination = arr.slice(i, i + count);
//         result.push(combination)
//     }

//     return result
// }
// console.log(getCombination(data, 2));
// console.log(getCombination(data, 3));
// console.log(getCombination(data, 1));

// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     const arr = dimensions.split(' ');
//     const firstValue = Number(arr[0]);
//     const secondValue = Number(arr[1]);

//     return firstValue * secondValue;
// }

// console.log(getRectArea('8 11'));
// console.log(getRectArea('15 11'));
// Task-4
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//     if (courses.includes(name)) {
//         return 'Ви вже маєте такий курс';
//     }
//     courses.push(name);
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS')); // 'Ви вже маєте такий курс'

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function removeCourse(name) {
//     const idx = courses.indexOf(name);
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT

//     console.log('~', ~-1); // 0
//     console.log(-(-1 + 1)); // 0
//     // -(x + 1)
//     // -1 => true => 0 => false
//     //  0 => false => -1 true
//     if (!~idx) {  //idx + 1
//         console.log(name);
//         return "Курс із таким ім'ям не знайдено"
//     }

//     courses.splice(idx, 1)
// }
// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue')); // 'Курс із таким ім'ям не знайдено'



const courses = ['HTML', 'CSS', 'Express','JavaScript', 'React', 'PostgreSQL'];
function updateCourse(oldName, newName) {
    const idx = courses.indexOf(oldName);

    if (~idx){
        courses[idx] = newName;
        return;
    }

    return "Курс із таким ім'ям не знайдено";
}




// updateCourse('HTML', 'NestJS');
console.log(updateCourse('qwerty', 'NestJS'));
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']