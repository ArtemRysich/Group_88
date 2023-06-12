/***** Оголошення змінних *****/

// let value;
// value = 15;
// value = 20;

// console.log(value);



/***** Примітивні типи даних ****/

// Number

// let value = 10.45;
// console.log(value);

// console.log(5 === 5);
// Особливий підтип NaN
// console.log(NaN === NaN);
// console.log(Number('22.5aa'));
// console.log(undefined + 1);
// console.log(null + 1); // 0 + 1
// console.log(false + 1); // 0
// console.log(true + 1); // 1 + 1


// String

// Типи рядків '' "" ``

// console.log("I'm");

// console.log('Total 25 + 15');
// const total = 25 + 15;
// console.log(`Total ${total}`);

// Boolean (true, false)
// true  => 1
// false => 0


// undefined

// null

// перевірка типу даних з яким працюємо метод typeof
// const value = '10';
// console.log(typeof value);
// console.log(typeof value === 'string');


/***** Комунікація з користувачем та можливість відображення якогось результату *****/

// console.log('result', 10 + 15);
// console.log('result', 10 + 15);
// console.log('result', 10 + 15);
// alert('Привіт вчи JS')

// const message = prompt("Введіть і'мя")
// console.log(message);

// const result = confirm('Будеш вчити JS ?');
// console.log(result);


/***** Основні оператори *****/

// >
// console.log(25 > 21);

// <
// console.log(25 < 24);
// ==

// console.log('false' == 0);
// console.log(false == 0);

// ===

// console.log(Number('25') === 25);

// <=
// console.log(24 <= 25);
// console.log(25 <= 25);
// >=

// console.log(26 >= 20);
// console.log(26 >= 26);

// !=
// console.log('1' != 1);

// !==
// console.log('1' !== 1);

// Приклади роботи

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false); 

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('a' < 'aAbBc');
// console.log('Papaya' === 'papaya');


/***** Значення які завжди будуть конвертовані до false (Обов'язково!!!) *****/

//  0 (число нуль)
// console.log(Boolean(0));
// // "" (порожній рядок)
// console.log(Boolean(''));
// // NaN
// console.log(Boolean(NaN));
// // undefined
// console.log(Boolean(undefined));
// // null
// console.log(Boolean(null));
// // false
// console.log(Boolean(false));

/***** Логічні оператори *****/
// const sum = 10
// console.log(0 < sum  && sum < 20);
// !
// console.log(10 !== 10);
// console.log(Boolean(''));
// console.log(!'');

// ||

// console.log(2 || 0 || 1);

// ?? реагує лише на null undefined

// console.log(0 ?? 1);
// console.log(false ?? 0);
// console.log(null ?? 1);
// console.log(undefined ?? 10);

// let qty; //undefined

// console.log(qty ?? 'Такого товару не знайдено');

// &&
// console.log(false && 1);
// console.log(NaN && 2);

// console.log(1 && 5 && 23);
// console.log(1 && 0 && 23);


// console.log(1 || 0 && 23);

// Приклади роботи

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log( 3 ||true || 4);

// console.log('' || false || 7);

// console.log(null || 2 || undefined);

// console.log('' ??  4);

// console.log(false ?? 7);

// console.log(null ?? 7);

// console.log(undefined ?? 7);


/***** Математичні оператори *****/

// const value = 10
// +
// const result = value + 15
// -
// const result = value - 5
// *
// const result = 10 + value * 5
// /

// %
// const result = value % 2 !== 0
// const result = !(value % 2) //=>  10 % 2 => !0 
// console.log(result);
// console.log(Boolean(0)) === console.log(!!0);

// false => HE HE 0
/***** Комбіновані оператори *****/

// +=

// -=

// *=

// /=



/***** Методи для роботки з числами (тип даних Number) *****/

// const str = '25.7a32px';
// Number.parseInt()
// console.log(Number.parseInt(str));
// Number.parseFloat()
// console.log(Number.parseFloat(str));
// Number.isNaN()  та метод isNaN()
// const num = Number(str) // NaN
// console.log(Number.isNaN(num));
// console.log(isNaN(num));
// console.log('=====================================');




// const str = '25.7a32px';
// console.log(typeof str);
// console.log(Number.isNaN(str));// NaN //String
// console.log(isNaN(str)); //Number(str) => NaN

// let value;

// value += 1;
// console.log(value);
// console.log(Number.isNaN(value))
// console.log(Number.isNaN(str))
// console.log(num === NaN);




// Класс Math
// const value = 11.500
// console.log(Math.floor(value));

// console.log(Math.ceil(value));

// Math.round()
// console.log(Math.round(value));


// console.log(Math.pow(5, 4));
// console.log(5 ** 4);


/***** Методи та властивості для роботки з рядками (тип даних String) *****/

// const str = 'Hello world';
// // length
// console.log(str.length);
// // toLowerCase()
// console.log(str.toLowerCase());
// // toUpperCase()
// console.log(str.toUpperCase());
// indexOf()

// console.log(str.indexOf(' '));
// console.log(str.indexOf('H'));
// console.log(str.includes('world'));
// const str = 'Hello world';
// endsWith()
// console.log(str.endsWith(' world'));
// startsWith()
// console.log(str.startsWith('h'));
// replace()
// console.log(str.replace('l', '🍕'));
// console.log(str);
// // replaceAll()
// console.log(str.replaceAll('l','🍟'));
// slice()

// console.log(str.slice(0, str.length-1));
// console.log(str);





// **************************************** Практика ****************************** //

// Task - 1

// Виконавши математичні операції та застосувавши шаблоні рядки виведи в консоль загальну кількість та ціну за кожен продукт та за всі продукти в кошику

const apple = '🍎';

const appleQuantity = 8;

const applePrice = 34;

// const  appleMessage = `${apple} total cost ${appleQuantity * applePrice}`
// console.log(appleMessage);
const lemon = '🍋';

const lemonQuantity = 3;

const lemonPrice = 72;

// const lemonMessage = lemon + ' total cost ' + (lemonQuantity + lemonPrice)
// console.log(lemonMessage);
// const cherry = '🍒';

// const cherryQuantity = 3;

// const cherryPrice = 72;

// const cherryMessage = `${cherry} total cost ${cherryQuantity * cherryPrice}`;

// console.log(cherryMessage);
// const result = `Total ${(applePrice * appleQuantity) + (lemonQuantity * lemonPrice) + (cherryQuantity * cherryPrice)}`

// console.log(result);

// Task - 2

// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// const totalMinutes = 1441;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const result = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
// console.log(result);



// Task - 3

// Виконай рефакторинг коду щоб уникнути помилок

// const name = 'Harry'
// const message = `Hello my name is ${name}`
// console.log(message);

const delivery = 25;
const price = 190;
const message = `Total purchase, price ${delivery + price}`;

console.log(message);

// Task - 4
// Виконай рефакторинг коду так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 0;
// const defaultValue = 10;
// const value = null ?? defaultValue;
// console.log(value);


// const KEY_AUTHORIZATION = 'qwerty111';
// console.log(KEY_AUTHORIZATION);