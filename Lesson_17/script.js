// Додатковий матеріал для самостійного ознайомлення
// Event loop documentation
// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii
// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

// ***********setTimeout*********** \\

// const id = setTimeout(() => {
// console.log('Time is over');
// }, 1000)

// console.log(id);
// // Видалення Timeout за необхідністю
// clearTimeout(id)

// Можливість передати параметри для колбеку
// const id = setTimeout((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine',)

// ***********setInterval*********** \\

// const id = setInterval(() => {
// console.log('setInterval');
// }, 1000)

// Видалення Timeout за необхідністю
// clearInterval(id)

// Можливість передати параметри для колбеку
// const id = setInterval((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukraine')

// Приклад використання setInterval та setTimeout
// Створимо блок з рекламою яка зникне через 10 секундок

// const elements = {
//   content: document.querySelector(".js-content"),
//   text: document.querySelector(".js-text"),
// };

// let counter = 10;

// elements.text.textContent = `Залишилось ${counter} секунд`;
// const id = setInterval(() => {
//   counter -= 1;
//   elements.text.textContent = `Залишилось ${counter} секунд`;
// }, 1000);

// setTimeout(() => {
//   clearInterval(id);
//   elements.content.style.display = "none";

// }, counter * 1000);

// ***********Синхронний та асинхронний JavaScript*********** \\
// console.log('start');

// setTimeout(() => {
//     console.log(setTimeout);
// }, 0)

// console.log('finish');

// setTimeout(() => {
//   console.log("Hello world");
// }, 0);

// console.time("for");

// for (let i = 0; i < 4000000; i += 1) {
// //   console.log(i);
// }

// console.timeEnd("for");

// ***********Class Date*********** \\
// const currentDate = new Date();

// console.log(currentDate);
// const targetDate = new Date('sep 05 2023')
// console.log(targetDate);

// console.log(targetDate - currentDate);

// Перерва до 21.00

// Практика
// Потрібно створити два приклади годинника (Електронний та механічний)
// const arrDay = [
//   "Неділя",
//   "Понеділок",
//   "Вівторок",
//   "Середа",
//   "Четвер",
//   "П`ятниця",
//   "Субота",
// ];

// const namesOfMonth = [
//   "Січень",
//   "Лютий",
//   "Березень",
//   "Квітень",
//   "Травень",
//   "Червень",
//   "Липень",
//   "Серпень",
//   "Вересень",
//   "Жовтень",
//   "Листопад",
//   "Грудень",
// ];

// const elements = {
//   day: document.querySelector(".date-day"),
//   date: document.querySelector(".date"),
//   month: document.querySelector(".date-month"),
//   year: document.querySelector(".date-year"),
//   digitalClock: document.querySelector(".digital-clock"),
//   secondsArrow: document.querySelector(".clock-seconds__arrow"),
//   minutesArrow: document.querySelector(".clock-minutes__arrow"),
//   hoursArrow: document.querySelector(".clock-hours__arrow"),
// };

// setInterval(() => {
//   const currentTime = new Date();

//   const current = {
//     day: arrDay[currentTime.getDay()],
//     date: currentTime.getDate(),
//     month: namesOfMonth[currentTime.getMonth()],
//     year: currentTime.getFullYear(),
//     hours: currentTime.getHours(),
//     minutes: currentTime.getMinutes(),
//     seconds: currentTime.getSeconds(),
//     milli : currentTime.getMilliseconds()
//   };

//   elements.day.textContent = current.day;
//   elements.date.textContent = current.date;
//   elements.month.textContent = current.month;
//   elements.year.textContent = current.year;

//   elements.digitalClock.textContent = `Поточний час ${formatTime(
//     current.hours
//   )} : ${formatTime(current.minutes)} : ${formatTime(current.seconds)}`;

//   const secondsDeg = ((360 / 60 ) * current.seconds) //+ (360 / 60 /1000) * current.milli;
//   const minutesDeg = (360 / 60) * current.minutes;
//   const hoursDeg = ((360 / 12) * current.hours) + (360 / 12 / 60 * current.minutes);

//   elements.secondsArrow.style.transform = `rotate(${secondsDeg}deg)`;
//   elements.minutesArrow.style.transform = `rotate(${minutesDeg}deg)`;
//   elements.hoursArrow.style.transform = `rotate(${hoursDeg}deg)`;
// }, 1000);

// function formatTime(value) {
//   return value.toString().padStart(2, "0");
// }

const form = document.querySelector(".feedback-form");
const KEY_LS = "feedback-form-state";

form.addEventListener("input", handlerInput);
form.addEventListener("submit", handlerSubmit);

let data = JSON.parse(localStorage.getItem(KEY_LS)) ?? {};
const { email, message } = form.elements;

email.value = data.email ?? "";
message.value = data.message ?? "";

function handlerInput(evt) {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem(KEY_LS, JSON.stringify(data));
}

function handlerSubmit(evt) {
  evt.preventDefault();
  console.log(data);

  form.reset();
  data = {};
  localStorage.removeItem(KEY_LS);
}
