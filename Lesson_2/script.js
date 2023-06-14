/***** Інструкція if та її варіації *****/
// if(){

// }


// if(){

// }else{

// }

// const value = 10;
// if (value === 1) {
//     console.log(1);
// } else if (value === 10) {
//     console.log('first', 10);
// } else if (value === 7) {
//     console.log(7);
// } else if (value === 10) {
//     console.log('second', 10);
// } else {
//     console.log('default');
// }


// const value = 4;
// if (value === 1) {
//     console.log(1);
// } else if (value < 10 && value > 5) {
//     console.log('first', 10);
// } else if (value === 10) {
//     console.log('second', 10);
// } else {
//     console.log('default');
// }



/***** Інструкція switch *****/
// const value = 4;

// switch (value) {
//     case 1:
//         console.log('Один');
//         break;
//     case 3:
//         console.log('Три');
//         break;
//     case 4:
//         console.log('Чотири');
//         break;
//     case 7:
//         console.log('Сім');
//         break;
//     default:
//         console.log('default');
// }










/***** Тернарний оператор *****/

// const value = 17;


// value > 15 && value < 20 ? console.log('в діапазоні від 15 до 20') : console.log('Спробуйте ще');



// if (value > 15 && value < 20) {
//     console.log('в діапазоні від 15 до 20')
// }

// const value = 15;
// let message;

// value > 15 && value < 20 ? message = 'в діапазоні від 15 до 20' : message = 'Спробуйте ще';


// console.log(message);

// const value = 17;
// let message;

// message = value > 15 && value < 20 ?  'в діапазоні від 15 до 20' : 'Спробуйте ще';

// console.log(message);


/***** Області видимості *****/ //(Обов'язково !!!)

// Глобальна та локальна
// const
// let


// const value = 10;
// let str = 'Hello world';


// if (true) {
//     // console.log(str);
//     let number = 22;
//     const str1 = 'I love JS'
//     if (true) {
//         const str2 = 'Home'
//         console.log(str);
//     }

//     console.log(str2);

// }
// console.log(hello);
// const hello = 1

// const value = 10;
// let str = 'Hello world';


// if (true) {
//     // console.log(str);
//     let number = 22;
//     if (true) {
//         console.log(str);
//     }
//     let str = 'I love JS'
// }





// console.log(str);

// switch (1) {

// }

// function someName() {

// }







// Перерва до 21.15







//  Глобальна та функціональна
// var


// var num = 10;

// if (true) {
//     var num = 15;
// }

// console.log(num);

// function foo() {
//     var str = 'Hello world';
// }

// console.log(str);





/***** Цикл for *****/

// let i;
// const str = 'hello world';
// for (let i = 0; i < str.length; i += 1) {
//     console.log(str[i]);
// }




/***** Цикл while *****/
// const str = 'hello world';
// let i = 0;
// while (i < str.length) {
//     console.log(str[i]);
//     i += 1;
// }

// let i = 0;
// while (i < 0) {
//     console.log('Hello');
//     i += 1
// }

/***** Цикл do while *****/


// let i = 0;

// do {
//     console.log('hello world');
//     i += 1
// } while (i < 0)



// let idx = -1;

// const str = 'Hello world';
// console.log(str.length);
// for (let i = 0; i < str.length; i += 1) {
//     // console.log(i);
//     if (str[i] === 'd') {
//         idx = i;
//         break;
//     }
// }

// console.log('result',idx);



// for (let i = 0; i <= 20; i += 1) {
//     if (i % 2 === 0) {
//         console.log('Парне', i);
//         continue;
//     }
//     console.log('Не парне', i);
// }





// **************************************** Практика ****************************** //



// Task - 1
// Потрібно створити світлофор використовуючи конструкцію if
// В propmt() юзер вводить колір який він бачить на світлофорі
// В результаті виконання юзер має отримати повідомлення з дією яку має виконати


// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful


// let message = prompt('color ?');
// let action;

// if (message) {
//     message = message.toLowerCase();
// }


// if (message === 'red') {
//     action = 'stop';
// } else if (message === 'yellow') {
//     action = 'ready';
// } else if (message === 'green') {
//     action = 'go';
// } else {
//     action = 'be careful';
// }

// console.log(action);
// console.log(message);






// Task - 2
// Виконай рефакторинг попереднього завдання використовуючи конструкцію switch
// Можливі 4 стани світлофора
// 1 - red, action stop
// 2 - yellow, action ready
// 3 - green, action go
// 4 - Будь-який інший колір або значення відповідно світлофор не працює, action be careful



// let message = prompt('color ?');
// let action;

// if (message) {
//     message = message.toLowerCase();
// }

// switch (message) {
//     case 'red':
//         action = 'stop';
//         break;
//     case 'yellow':
//         action = 'ready'
//         break;
//     case 'green':
//         action = 'go';
//         break;
//     default:
//         action = 'be careful';
// }

// console.log(action);










// Task - 3
// Потрібно створити додаток для автоматизації перевірки правильних відповідей на дитячі загадки
// Створи функцію яка буде приймати 2 параметри
// 1 параметр це текст загадки
// 2 правильна відповідь

// Після виклику функції користувач має побачити питання на екрані та поле для вводу відповіді, використовуй propmt()
// Функція має повертати булеве значення з результатом відповіді (true/false)

// function check(text, answer) {
//     // console.log(answer);
//     let message = prompt(text);
//     if (message){
//         message = message.toLowerCase();
//     }

//     return message === answer;
// }
// const result = check('Хоч не літак, а крилатий, Без крил не може працювати.', 'вітряк');
// console.log(result);
// check('Через воду він проводить, А сам з місця вік не сходить', 'міст')
// Тестові дані
// Хоч не літак, а крилатий,
// Без крил не може працювати.
// (Вітряк)


// Через воду він проводить,
// А сам з місця вік не сходить.
// (Міст)






// Task - 4
// Потрібно створити функцію яка буде рахувати за скільки днів Равлик зможе виповзти з колодязя
// функція приймає 1 параметр глибину колодязя, функція повертає кількість днів яку равлик витратив на шлях.
// за день Равлик проповзає на 7 м в гору, а за ніч опускається на 2 м в низ
// для вирішення завдання використовуй цикл while

// 42 м, виповзе за 8 днів
// 17 м, виповзе за 3 дні
// 18 м, виповзе за 4 дні

// function getDays(deps) {
//     const daySpeed = 7;
//     const nightSpeed = 2;
//     let total = 0;
//     let days = 0;

//     while (total < deps) {
//         total += daySpeed;
//         days += 1;

//         if (total < deps) {
//             total -= nightSpeed;
//         }
//     }
//     console.log(days);
// }
// getDays(42)












// Task - 5
// Порахуй скільки голосних літер у реченні.

function countVowel(str) {
    const vowels = "aeiou";
    let counter = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (vowels.includes(str[i].toLowerCase())) {
            counter += 1
        }
    }

    return counter;
}
console.log(countVowel("HELLO WORLD")) // 3
// console.log(countVowel("Junior Web Developer")) // 8