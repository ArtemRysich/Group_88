const name = 'student name';


// String.prototype.sayHello = function (query) {
//     console.log(`Hello my name is ${query}`);
// }

// const str = 'some value';
// name.sayHello();
// str.sayHello('Alice')




// const user = {
//     name: 'User name',
//     age: 28,
//     sayHello() {
//         console.log(`Hello my name is ${this.name}`);
//     },
//     getAge() {
//         console.log(`my age ${this.age}`);
//     }
// }

// const student = Object.create(user);
// student.name = 'Alice';
// console.log('student', student.getAge());
// // console.log(student);
// // student.sayHello()


// const studentHTML = Object.create(student)

// studentHTML.age = 19;

// console.log(studentHTML);
// studentHTML.sayHello()
// studentHTML.getAge()




// class User {
//     #email;
//     constructor(name, age = 10, email) {
//         this.#email = email;
//         this.name = name;
//         this.age = age;
//     }

//     showName() {
//         console.log(`Hello my name is ${this.name}`);
//     }

//     removeAge() {
//         delete this.age
//     }

//     #checkPassword() {
//         const password = prompt();
//         return password === '1111'
//     }

//     get email() {

//         if (this.#checkPassword()) {
//             return this.#email
//         }

//         return '😂'
//     }

//     set email(newEmail) {

//         if (this.#checkPassword()) {
//             this.#email = newEmail;
//         }
//     }
// }

// const artem = new User('Artem', 28, 'test@gmail.com');
// artem.showName()


// class Student extends User {
//     constructor(name, age, email, points) {
//         super(name, age, email)
//         this.points = points;
//     }
// }

// class StudentHTML extends Student {
//     constructor(name, age, email, points) {
//         super(name, age, email, points)
//     }
// }

// const artem = new StudentHTML('Artem', 28, 'test@gmail.com', 45)
// artem.showName()
// artem.email = 'artem@gmail.com'
// console.log(artem.email);
// console.log(artem.email);
// artem.email = 'artem@gmail.com';
// console.log(artem.#email);



// console.log(artem.name);
// artem.name = false;
// console.log(artem.name);
// const alice = new User('Alice', 33);
// const kate = new User('Kate', 22);

// console.log(artem);
// console.log(alice);
// console.log(kate);











// Перерва до 21.25





// Task-1
// Необхідно створити клас Rectangle, який представляє прямокутник. Клас повинен мати приватні властивості width та height, а також публічні гетери та сетери для цих властивостей. Гетери повинні повертати значення властивостей, а сетери повинні дозволяти змінювати значення властивостей з валідацією.

class Rectangle {
    #width;
    #height;
    constructor({ width, height } = {}) {
        this.#width = width;
        this.#height = height
    }
    get width() {
        return this.#width;
    }
    set width(newWidth) {
        if (typeof newWidth === 'number' && newWidth > 0) {
            this.#width = newWidth;
        } else {
            console.log('Ширина повинна бути числом більше за 0');
        }
    }

    get height() {
        return this.#height;
    }

    set height(newHeight) {
        if (typeof newHeight === 'number' && newHeight > 0) {
            this.#height = newHeight;
        } else {
            console.log('Висота повинна бути числом більше за 0');
        }
    }
}
const item = new Rectangle({ width: 10, height: 5 });

console.log(item.width); // get
item.width = 12 // set
console.log(item.width); //get

// Task-2
// Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// name приватна властивість (ім'я, успадковується від User),
// surname приватна властивість (прізвище, успадковується від User),
// year (рік вступу до вузу).

// Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// Приклад ініціалізації екземпляру класа:
// const student = new Student('Петрик', 'Пяточкин', 2019);

// class User {
//     #name;
//     #surname;
//     constructor(name, surname) {
//         this.#name = name;
//         this.#surname = surname;
//     }
//     getFullName() {
//         return `${this.#name} ${this.#surname}`
//     }
// }


// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname)
//         this.year = year;
//     }
//     getCourse() {
//         const today = new Date();
//         const currentYear = today.getFullYear()
//         const diff = currentYear - this.year;

//         if (currentYear < this.year) {
//             return;
//         }

//         if (diff > 5) {
//             return 'Студент являєтсья випускником';
//         }

//         return `${diff} курс`;
//     }
// }


// const student = new Student('Петрик', 'Пяточкин', 2018);
// console.log(student);
// console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student.getCourse());   //поверне 4









// Task-3
// Необхідно створити клас BankAccount, який представляє банківський рахунок. Клас повинен мати приватну властивість _balance, яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з рахунку. При цьому _balance повинна бути доступна лише в межах класу BankAccount та його приватних методів.

// class BankAccount {
//     #balance
//     constructor() {
//         this.#balance = 0;
//     }
//     deposit(amount) {
//         if (amount > 0) {
//             this.#changeBalance(amount);
//             console.log(`Здійснено депозит ${amount}`);
//             return;
//         }

//         console.log(`Сума має бути більша за 0`);
//     }
//     withdraw(amount) {
//         if (amount <= 0) {
//             console.log(`Сума має бути більша за 0`);
//         } else if (amount > this.#balance) {
//             console.log('Недостатньо коштів на рахунку');
//         } else {
//             this.#changeBalance(-amount);
//             console.log(`Знято ${amount}`);
//         }
//     }
//     #changeBalance(amount) {
//         this.#balance += amount;
//     }
// }


// const instance = new BankAccount()
// instance.deposit(100)
// instance.deposit(1200)
// instance.withdraw(1000)
// console.log(instance);





// Task-4
// Необхідно створити клас Hero, який представляє героя з гри. Клас повинен мати публічні властивості name, level та health, а також методи attack та heal, що дозволяють герою атакувати та відновлювати здоров'я відповідно.
// Також створи функціонал для підрахунку створених героїв

// Властивість name має зберігати ім'я героя.
// Властивість level має зберігати рівень героя.
// Властивість health має зберігати поточний рівень здоров'я героя.
// Метод attack наносить пошкодження в розмір 10 одиниць. Метод heal додає до здоров'я героя 10 одиниць.



class Hero {
    static counter = 0;
    static addHero() {
        this.counter += 1;
        console.log('Кількість героїв ', this.counter);
    }

    #level;
    constructor(name) {
        this.name = name;
        this.#level = 1;
        this.health = 200;
        Hero.addHero();
    }

    attack() {
        console.log(`Attack with 10 damage`);
    }

    heal() {
        this.health += 10;
    }
}

const bloodseker = new Hero('Bloodseker');
const bloodseker2 = new Hero('Bloodseker');
const bloodseker3 = new Hero('Bloodseker');
const bloodseker4 = new Hero('Bloodseker');
const bloodseker5 = new Hero('Bloodseker');
const bloodseker6 = new Hero('Bloodseker');

console.log(bloodseker.heal());
console.log(bloodseker);
console.log(Hero.counter);