"use strict";


let number = 5;
const leftBorderWidth = 1;

// console.log(-4/0);
// console.log('str' * 9);

const persone = `4`;
const bool = true;

// null - коли пробуємо визвати переменну якої не існує 
// undefinded - коли переменна создана, но в ній нічого не записано

let ddd;
// console.log(ddd);

const obj = {
  name: 'Valerii',
  age: 25,
  isMarried: false
};

// console.log(obj.name);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// об'єкт - має ключ і значення
// масив - має лише значення (ключом можна назвати порядковий номер елемента)

//                                006
// alert('Hello');

// const result = confirm('Are you Here ?');
// console.log(result);

// const answer = +prompt('You have 18?', '18'); 
// console.log(answer + 5);
// typeof - тип переменної приклад: typeof(answer)

const answers = [];

// answers[0] = prompt('Your firstname ?', '');
// answers[1] = prompt('Your lastname ?', '');
// answers[2] = prompt('Your age ?', '');

// document.write(answers);

// console.log(typeof(answers)); // виведе object
// console.log(typeof(null)); // виведе object

//                  008 ІНТЕРПОЛЯЦІЯ

const category = 'toys';

// console.log('https://someurl.com/' + category + '/' + '4'); // ES5 

// console.log(`https://someurl.com/${category}/5`); //ES6

const user = 'Valerii';

// alert(`Hello, ${user}`);

//                 009 ОПЕРАТОРИ

// console.log('arr' + ' - object'); // конкатенація
// console.log(5 + +'4'); //додавання (унарний плюс)

// інкремент, декремент

let incr = 10,
    decr = 10;

incr++; // оператор інкремент постфіксний
decr--; // оператор деркремент постфіксний

++incr; // оператор інкремент префіксний
--decr; // оператор деркремент префіксний


// console.log(incr, ' ', decr);

// console.log(5%2); // остача

// console.log(2*4 == 8); // нестроге равенство
// console.log(2*4 === '8'); // строге
// && - повертає true якщо всі значення правдиві
// || - повертає true якщо хоча б одне значення правдиве
const isChecked = true,
      isClosed = true;

console.log(isChecked || !isClosed);