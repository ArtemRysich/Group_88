// ***************** Конструкція async await ***************** \\

// function servicesCountry() {
//   return fetch("https://restcountries.com/v3.1/name/Ukraine")
//     .then((resp) => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }

//       return resp.json();
//     })
//     .then((data) => {
//         return fetch('data.capital')
//         .then(resp => {

//         })
//         .then()
//     });
// }

// async function servicesCountry() {
//   const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");

//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }

//   const data = await resp.json();
//   const respWeather = await fetch('data.capital');

//   if (!respWeather.ok) {
//     throw new Error(respWeather.statusText);
//   }

//   const dataWeather = await respWeather.json()
// }

// servicesCountry();

// ***************** Асинхрона функція завжди поверне проміс ***************** \\

// async function fn() {
//   const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");
//   console.log(resp);
//   console.log("hello");
// }

// const result = fn();
// console.log(result);
// console.log("after async function");

// async function fn() {
//     console.log('hello');
// }
// fn()

//  function fn() {
//     const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");
// }
// fn()
// *****************Асинхронною функціює може бути будь який різновид функції ***************** \\

// ****** Arrow function ****** \\

// const servicesCountry = async () => {
//     const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");
//     console.log(resp);
// }

// servicesCountry()
// ****** Function expression ****** \\
// const servicesCountry = async function(){
//     const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");
//     console.log(resp);
// }
// servicesCountry()

// ****** Object method ****** \\

// const service = {
//     countryName : "Ukraine",
//     async serviceCountry(){
//         const resp = await fetch(`https://restcountries.com/v3.1/name/${this.countryName}`)

//         console.log(resp);
//     }
// }

// service.serviceCountry()

// class Service {
//   constructor(country) {
//     this.countryName = country;
//   }

//   async serviceCountry() {
//     const resp = await fetch(
//       `https://restcountries.com/v3.1/name/${this.countryName}`
//     );

//     console.log(resp);
//   }
// }

// const Ukraine = new Service('Ukraine')
// Ukraine.serviceCountry()

// ************ Обробка за допомогою then та catch ************ \\

// async function serviceCountry() {
//   const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");

//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }

//   return resp.json();
// }

// serviceCountry()
// .then(data => console.log(data))
// .catch(err => console.log(err))
// .finally(() => {});

// ************ Обробка за допомогою try та catch ************ \\

// async function serviceCountry() {
//   try {
//     const resp = await fetch("https://restcountries.com/v3.1/name/Ukraine");

//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     const data = await resp.json();
//     console.log(data);
//     // createMarkup(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// serviceCountry();

// async function serviceCountry() {
//   try {
//     const resp = await fetch("https://restcountries.com/v3.1/nme/Ukraine");

//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }

//     return resp.json();
//   } catch (err) {
//     console.log(err);
//   }
// }

// serviceCountry()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err))
//   .finally(() => {});

// ПЕРЕРВА ДО 20.55

// // ************ Паралельні та послідовні запити ************ \\

// *********** Послідовні *********** \\
// async function servicesCountry(){
//     const resp1 = await fetch('https://restcountries.com/v3.1/name/Ukraine')
//     const resp2 = await fetch('https://restcountries.com/v3.1/name/Poland')
//     const resp3 = await fetch('https://restcountries.com/v3.1/name/Greece')
// }

// servicesCountry()
// *********** Паралельні *********** \\

// async function servicesCountry() {
//   const countries = ["Ukraine", "Poland", "Greece"];
//   const responses = countries.map(async (country) => {
//     const resp = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     return resp.json();
//   });
// const data = await Promise.allSettled(responses);
// console.log(data);

// }
// servicesCountry()
// ************* CORS ************** \\

// fetch(
//   "https://common-api.rozetka.com.ua/v2/fat-menu/full?front-type=xl&country=UA&lang=ru&r=0.8775831279096225"
// )
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));

// ********************* Практика ********************* \\
// Створи додаток для туристичного агенства
// Користувач має форму в яку може додавати довільну кількість полів
// В кожне поле він вводить назву країни
// Після сабміту форми форма відправляє запит на бекенд та отримує назви столиць цих країн
// На основі відповіді попереднього сервісу потрібно створити прогноз погоди по кожній столиці
// Використовуй паралельні запити
// Бекенд для пошуку країн https://restcountries.com/
// Бекенд для прогнозу погоди  https://www.weatherapi.com/docs/   КЛЮЧ ВАЛІДНИЙ 21 ДЕНЬ !!!!!

const elements = {
  form: document.querySelector(".js-search"),
  formContainer: document.querySelector(".js-form-container"),
  addField: document.querySelector(".js-add"),
  list: document.querySelector(".js-list"),
};

elements.addField.addEventListener("click", handlerAddField);
elements.form.addEventListener("submit", handlerSubmit);

function handlerAddField() {
  elements.formContainer.insertAdjacentHTML(
    "beforeend",
    '<input type="text" name="country"/>'
  );
}

async function handlerSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);
  const countries = formData
    .getAll("country")
    .map((item) => item.trim())
    .filter((item) => item)
    .filter((item,idx,arr) => arr.indexOf(item) === idx);

  try {
    const capitals = await servicesCountry(countries);
    const weather = await serviceWeather(capitals);

    elements.list.innerHTML = createMarkup(weather);
  } catch (err) {
    console.log(err);
  } finally {
    elements.formContainer.innerHTML = '<input type="text" name="country"/>';
  }
}

async function servicesCountry(countries) {
  const BASE_URL = "https://restcountries.com/v3.1/name/";
  const responses = countries.map(async (country) => {
    const resp = await fetch(`${BASE_URL}${country}`);
    if (!resp.ok) {
      return Promise.reject(resp.statusText);
    }

    return resp.json();
  });

  const data = await Promise.allSettled(responses);
  return data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value[0].capital[0]);
}

async function serviceWeather(capitals) {
  const BASE_URL = "https://api.weatherapi.com/v1/";
  const END_POINT = "current.json";
  const API_KEY = "14c56bddeab14583a6e164909231107";

  const responses = capitals.map(async (capital) => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: capital,
      lang: "uk",
    });
    const resp = await fetch(`${BASE_URL}${END_POINT}?${params}`);

    if (!resp.ok) {
      return Promise.reject(resp.statusText);
    }

    return resp.json();
  });

  const data = await Promise.allSettled(responses);

  return data
    .filter(({ status }) => status === "fulfilled")
    .map(
      ({
        value: {
          current: {
            condition: { text, icon },
            temp_c,
          },
          location: { name, country },
        },
      }) => {
        return { text, icon, temp_c, name, country };
      }
    );
}

function createMarkup(arr) {
  return arr
    .map(
      ({ country, icon, name, temp_c, text }) => `<li>
  <img src="${icon}" alt="${text}">
  <h2>${country}</h2>
  <h2>${name}</h2>
  <p>${text}</p>
  <p>${temp_c} °C</p>
</li>`
    )
    .join("");
}
