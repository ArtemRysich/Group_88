// CRUD
// C - Create - POST
// R - Read   - GET
// U - Update - PUT PATCH
// D - Delete - DELETE

// https://jsonplaceholder.typicode.com/guide/
// API https://jsonplaceholder.typicode.com/posts

// fetch("https://jsonplaceholder.typicode.com/posts/101").then((resp) =>
//   console.log(resp)
// );

// Create - POST

// const post = {
//     userId : 105,
//     title: ' world Hello',
//     body: 'I love JS'
// };

// const options = {
//     method: "POST",
//     body: JSON.stringify(post),
//     headers: {
//         'Content-type' : 'application/json'
//     }
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)

// PATCH - UPDATE

// fetch("https://jsonplaceholder.typicode.com/posts/1").then((resp) =>
//   console.log(resp)
// );
// const post = {
//   title: "Hello world",
//   body: "I love JS",
// };
// const options = {
//   method: "PATCH",
//   body: JSON.stringify(post),
//   headers: {
//     "Content-type": "application/json",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts/1", options);

// const before = {
//   body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   id: 1,
//   title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   userId: 1,
// };
// const post = {
//     title: "Hello world",
//   };

//   const after = {
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     id: 1,
//     title: "Hello world",
//     userId: 1,
//   }
// PUT - UPDATE

// const before = {
//   body: "quia et suscipit\nsuscipit recusandae ",
//   id: 1,
//   title: "sunt aut facere repellat provident ",
//   userId: 1,
// };
// const after = {
//     id: 1,
//     title: "Hello world",
// };
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// const post = {
//   title: "Hello world",
// };

// const options = {
//   method: "PUT",
//   body: JSON.stringify(post),
//   headers:{
//     "Content-type" : 'application/json'
//   }
// };
// fetch("https://jsonplaceholder.typicode.com/posts/1", options);

// DELETE
// const options = {
//     method: 'DELETE'
// }
// fetch("https://jsonplaceholder.typicode.com/posts/1", options);

// ************************ Практика ******************* \\

// Завдання - 1.
// Потрібно створи форму "Зв'яжіться зі мною" в якій користувач має можливість залишити заявку для того, щоб з ним зв'язались та відповіли на його питання
// Форма має складатись з таких елементів:
// 1 - Поле для імені.
// 2 - Поле для номера телефону.
// 3 - Поле для адреси електронної пошти.
// 4 - Поле для питання.

// Форма має відправляти дані на бекенд та зберігати їх в базі даних.

// Завдання - 2.
// Реалізуй сторінку для власника бізнесу - після того, як потрапляємо на сторінку потрібно отримати з бази даних всі заявки, які були залишені користувачами

const elements = {
  form: document.querySelector(".js-question"),
};

elements.form.addEventListener("submit", handlerQuestion);

function handlerQuestion(evt) {
  evt.preventDefault();

  const { userName, phone, email, question } = evt.currentTarget.elements;
  const data = {
    name: userName.value,
    phone: phone.value,
    email: email.value,
    comment: question.value,
  };

  serviceQuestion(data)
  .then(() => alert('Success'))
  .catch(() => alert('Failed'))
  .finally(() => evt.target.reset())
}

function serviceQuestion(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };

  return fetch("http://127.0.0.1:3000/api/question", options)
  .then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
