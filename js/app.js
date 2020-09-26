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

// const obj = {
//   name: 'Valerii',
//   age: 25,
//   isMarried: false
// };

// console.log(obj.name);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
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

// const category = 'toys';

// console.log('https://someurl.com/' + category + '/' + '4'); // ES5 

// console.log(`https://someurl.com/${category}/5`); //ES6

// const user = 'Valerii';

// alert(`Hello, ${user}`);

//                 009 ОПЕРАТОРИ

// console.log('arr' + ' - object'); // конкатенація
// console.log(5 + +'4'); //додавання (унарний плюс)

// інкремент, декремент

// let incr = 10,
//     decr = 10;

// incr++; // оператор інкремент постфіксний
// decr--; // оператор деркремент постфіксний

// ++incr; // оператор інкремент префіксний
// --decr; // оператор деркремент префіксний


// console.log(incr, ' ', decr);

// console.log(5%2); // остача

// console.log(2*4 == 8); // нестроге равенство
// console.log(2*4 === '8'); // строге
// && - повертає true якщо всі значення правдиві
// || - повертає true якщо хоча б одне значення правдиве
const isChecked = true,
      isClosed = true;

// console.log(isChecked || !isClosed);

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {
// 	},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// const answer1 = prompt('Один из последних просмотренных фильмов?', ''),
//       answer2 = prompt('На сколько оцените его?', ''),
//       answer3 = prompt('Один из последних просмотренных фильмов?', ''),
//       answer4 = prompt('На сколько оцените его?', '');

//       personalMovieDB.movies[answer1] = answer2;
//       personalMovieDB.movies[answer3] = answer4;

//                    013 IF/ELSE

// if(4 == 9) {
//   console.log('ok');
// } else {console.log('not ok');}

// const num = 50;

// (num === 50) ? console.log('ok') : console.log('error');

// switch(num) {
//   case 49: 
//     console.log('49');
//     break;
//   case 100: 
//     console.log('100');
//     break;
//   case 50: 
//     console.log('50');
//     break;
//   default:
//     console.log('error');
//     break;
// }

//                          014 FOR/WHILE

// let num = 50;
// while(num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while(num < 55);

// for (let i = 1; i < 5; i++) {
//   console.log(num);
//   num++;
// }

// for (let i = 1; i < 8; i++) {
//   if(i === 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// if(numberOfFilms < 10) {
// 	console.log("Просмотрено довольно мало фильмов");
// } else if(numberOfFilms >= 10 && numberOfFilms <= 30) {
// 	console.log("Вы классический зритель");
// } else if(numberOfFilms > 30) {
// 	console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }

//       const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {
//         },
//         actors: {},
//         genres: [],
//         privat: false,
//       };

//       for(let i = 1; i < 2; i++) {
//         const answer1 = prompt('Один из последних просмотренных фильмов?', '');
//               if(answer1.length > 50){
//                 console.log('ввести название фильма длинее, чем 50 символов');
//                 i--;
//               } else if (answer1.length === 0) {
//                 console.log('zero');
//                 i--;
//               } else {
//                 const answer2 = prompt('На сколько оцените его?', '');
//                 personalMovieDB.movies[answer1] = answer2;
//               }
               
//       }


//                    016 FUNCTIONS
    // Declaration = можна визвати перед обявлєнием цієї функції
function showFirstMessage(text) {
  console.log(text);
}

// showFirstMessage('hello world');

    // Expression = можна визвати тільки після обявлєнія цієї функції
const logger = function() {
  console.log('hello');
};

// logger();

    // Arrays func
    const multiply = (a, b) => {
      // console.log(a * b);
      return a * b;
    };

// console.log(multiply(2, 2));

//                   017

// const str = 'test';
// const arr = [1, 2, 4];

// console.log(str.length);

// // console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit')); // пошук в строкі

// const logg = 'hello world';

// console.log(logg.slice(6, 11));
// console.log(logg.slice(6));
// console.log(logg.slice(-5, -1));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5)); // 1 - з якої позиції, 2 - к-сть символів

// const num = 12.2;

// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test)); // перетворює строку в число
// console.log(parseFloat(test)); // перетворює строку в число

//                    018 
// function showMyDB(privat) {
// 	if(privat == false) {
// 		console.log(personalMovieDB);
// 	}
// }

// function writeYourGenres() {
//   for(let i = 1; i <= 3; i++){
//     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
//   }
// }



// let numberOfFilms;

// function start() {
// numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// detectPersonalLevel(numberOfFilms);

// while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// }
// }
// start();

//       const personalMovieDB = {
//         count: numberOfFilms,
//         movies: {
//         },
//         actors: {},
//         genres: [],
//         privat: false,
//       };

//       showMyDB(personalMovieDB.privat);



// function rememberMyFilms() {
// for(let i = 1; i < 2; i++) {
// 	const answer1 = prompt('Один из последних просмотренных фильмов?', '');
//       if(answer1.length > 50){
//         console.log('ввести название фильма длинее, чем 50 символов');
//         i--;
//       } else if (answer1.length === 0) {
//         console.log('zero');
//         i--;
//       } else {
//         const answer2 = prompt('На сколько оцените его?', '');
//         personalMovieDB.movies[answer1] = answer2;
//       }
       
// 	}	
// }

// rememberMyFilms();

// function detectPersonalLevel(numberOfFilms) {
// 	if(numberOfFilms < 10) {
// 		console.log("Просмотрено довольно мало фильмов");
// 	} else if(numberOfFilms >= 10 && numberOfFilms <= 30) {
// 		console.log("Вы классический зритель");
// 	} else if(numberOfFilms > 30) {
// 		console.log("Вы киноман");
// 	} else {
// 	  	console.log("Произошла ошибка");
// 	}
	
// }

// writeYourGenres();

//                    019 CALLBACK

// function learnJS(lang, cb) {
//   console.log(`Im study ${lang}`);
//   cb();
// }

// function done() {
//   console.log('I watch this lesson');
// }

// learnJS('JS', done);

//                  020 OBJCTS destruction

// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: 'black',
//     bg: 'red',
//   },
//   makeTest: function() {
//     console.log('test');
//   }
// };

// options.makeTest();

// const {border, bg} = options.colors; // деструктуризація
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;
// let counter = 0;
// for (let key in options) {
//   if(typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`proteries ${i} have atributes ${options[key][i]}`);
//       counter++;
//     }
//   } else {
    
//   console.log(`proteries ${key} have atributes ${options[key]}`);
//   counter++;
//   }
// }

//                  021 ARRAYS
// const arr = [10, 2, 13, 26, 8];
// arr.sort(); // виведе [10, 13, 2, 26, 8]; так як метод sort сортує елементи як строки
// arr.sort(compareNum); // відсортує числа у правильному поряду [2, 8, 10, 13, 26]
// console.log(arr); 

// function compareNum(a, b) {
//   return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);

// arr.forEach(function(item, i, arr){
//   console.log(`${i}: ${item} внутрі масива ${arr}`);
// });

// arr.pop(); // видаляє останній елемент масиву
// arr.push(10); // додає елемент в кінець масиву

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let value of arr) {
//   console.log(value);
// }

// const str = prompt('','');
// const products = str.split(', '); // формує масив із введених даних із розподілювачем
// products.sort(); // сортує елементи
// console.log(products.join('; ')); // виводить елементи із введеним розподілювачем  


//                  022
// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy = obj; // ссилка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//   let objCopy = {};
  
//   let key;
//   for(key in mainObj) {
//     objCopy[key] = mainObj[key];
//   }
//   return objCopy;
// }

// const numbers = {
//   a: 2,
//   b: 5,
//   c: {
//     x: 7,
//     y: 4
//   }
// };

// const newNumbers = copy(numbers);

// numbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//   d: 17,
//   e: 20
// };

// console.log(Object.assign(numbers, add)); // додає в обєкт ще один обєкт
// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[3] = 'd';

// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 4, 7];

// log(...num); // спрет-оператор

// const array = ['a', 'b'];

// const newAarray = [...array]; // робить поверхневу копію масива

// const q = {
//   one: 1,
//   two: 2
// };

// const newObj = {...q};

//                   023 ООП
// let str = 'some'; // примітивний тип даних
// let strObj = new String(str); // примітив обернений в обєкт і знову повернувся в примітив

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function() {
//     console.log('hello');
//   }
// };

// const john = Object.create(soldier); // створює обєкт і бере прототипом обєкт зазначений в дужках

// const john = {
//   health: 100
// };

// john.__proto__ = soldier; // взяти прототип із старого обєкта (даний підхід із __proto__ вже не використовується)

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
// john.sayHello();
//                      024 

// const personalMovieDB = {
//   count: 0,
//   movies: {
//   },
//   actors: {},
//   genres: [],
//   privat: false,
//   start: function() {
// personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// personalMovieDB.detectPersonalLevel(personalMovieDB.count);
// while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
// personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
// }
// },
// rememberMyFilms: function() {
// for(let i = 1; i < 2; i++) {
// const answer1 = prompt('Один из последних просмотренных фильмов?', '');
// if(answer1.length > 50){
//   console.log('ввести название фильма длинее, чем 50 символов');
//   i--;
// } else if (answer1.length === 0) {
//   console.log('zero');
//   i--;
// } else {
//   const answer2 = prompt('На сколько оцените его?', '');
//   personalMovieDB.movies[answer1] = answer2;
// }
 
// }	
// },
// detectPersonalLevel: function() {
// if(personalMovieDB.count < 10) {
// console.log("Просмотрено довольно мало фильмов");
// } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
// console.log("Вы классический зритель");
// } else if(personalMovieDB.count > 30) {
// console.log("Вы киноман");
// } else {
// console.log("Произошла ошибка");
// }

// },
// showMyDB: function(privat) {
// if(privat == false) {
// console.log(personalMovieDB);
// }
// },
// toggleVisibleMyDB: function() {
// if(personalMovieDB.privat === false) {
// personalMovieDB.privat = true;
// } else {
// personalMovieDB.privat = false;
// }
// },
// writeYourGenres: function() {
// for(let i = 1; i <= 3; i++){
//   let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
//   if(genre == '' || genre == null) {
//     console.log('incorect text');
//     i--;
//   } else {
//     personalMovieDB.genres[i - 1] = genre;
//   }
// }
//   personalMovieDB.genres.forEach((item, i) => {
//     console.log(`Любимый жанр ${i + 1} - это ${item}`);
//   });
// }


// };

//                        025 DEBUG CONSOLE
// debugger;
//                        026 Динамічна типізація

// To String

// 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// 2) конкатенація
// console.log(typeof(5 + ''));

// const num = 5;

// console.log('https://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

// To Number

// 1)

// console.log(typeof(Number('4')));

// 2) унарний плюс

// console.log(typeof(+'5'));

// 3)

// console.log(typeof(parseInt('15px', 10)));

// let answ = +prompt('answer', '');

// To Boolean

// 0, '', null, undefined, NaN;

// let switcher = null;

// if(switcher) {
//   console.log('working...');
// }

// switcher = 1;

// if(switcher) {
//   console.log('working...');
// }


// 2)

// console.log(typeof(Boolean(4)));

// 3)

// console.log(typeof(!!'4444'));


//                     027 TASKS
// let x = 5; alert( x++ ); // 5
// [ ] + false - null + true // масив перетвориться на строку плюс фолс дасть фолс, й потім - нулл дасть NaN
// let y = 1; let x = y = 2; alert(x); // 2
// [ ] + 1 + 2 // 12
// alert( "1"[0] ) // 1, ([0] - індекс символа який виведе із строки)
// 2 && 1 && null && 0 && undefined // null

// && запинається на брехні
// || запинається на правді


// alert( null || 2 && 3 || 4 ); // 3

// const a = [1,2,3];
// const b = [1,2,3];

// console.log(a == b); // false

// alert( +"Infinity" ); // виведе строку

// 0 || "" || 2 || undefined || true || falsе // 2

//                        028 DOM

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');


// console.log(btns[1]);

// const circles = document.getElementsByClassName('circle');

// console.log(circles[1]);

// const hearts = document.querySelectorAll('.heart');

// console.log(hearts);

// hearts.forEach(item => {
//   console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

//                       029 DOM Action

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');


  // box.style.backgroundColor = 'blue';
  // box.style.width = '500px';

  // box.style.cssText = 'background-color: blue; width: 500px';
    
  // btns[1].style.borderRadius = '100%';

  // circles[0].style.backgroundColor = 'red';

  // for (let i = 0; i < hearts.length; i++) {
  //   hearts[i].style.backgroundColor = 'blue';
  // }

  // hearts.forEach(item => {
  //   item.style.backgroundColor = 'blue';
  // });

  // const div = document.createElement('div'); // create tag
  // const text = document.createTextNode('Im here');

  // div.classList.add('black'); // add class to tag 'div'

  // document.body.append(div); // add element 'div' to end in list in DOM 

  // wrapper.append(div); // new method (add element 'div' to DOM)
  // wrapper.appendChild(div); // old

  // wrapper.prepend(div); // add element 'div' to begin in list in DOM 

  // hearts[0].before(div); // add element 'div' before elememt hearts[0] in DOM 
  // hearts[0].after(div); // add element 'div' after elememt hearts[0] in DOM 

  // wrapper.insertBefore(div, hearts[0]); //old (додаєм елемент на сторінку, 1- елемент який додаєм, 2- перед яким елементом вставляємо)

  // circles[0].remove(); // delete element 
  // wrapper.removeChild(hearts[1]); //old

  // hearts[0].replaceWith(circles[0]); // заміна елемента іншим
  // wrapper.replaceChild(circles[0], hearts[0]);

  // div.innerHTML = '<h1>Hello World</h1>'; // для вставки html в елемент  
  
  // div.textContent = 'hello'; // для вставки текста в елемент 

// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // для вставки html-кода у вибраний елемент 

//                        031 EVENT HANDLER

// const btn = document.querySelector('.btn-1');
// const overlay = document.querySelector('.overlay');

// const btns = document.querySelectorAll('button');

// btn.onclick = function() {
//   alert('click');
// };

// btn.addEventListener('click', () => {
//   alert('Click');
// });


// let i = 0;
// const deleteElement = (e) => {
  // console.log(e.target); //  є посиланням на об'єкт який відправив подію (<button id="btn"></button>)
  // console.log(e.type); // тип івента (click, mouseenter, etc)
  // i++;
  // if(i == 1) {
  //   btn.removeEventListener('click', deleteElement);
  // }
// };


// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// всплитє - це коли собитіє срабатує на самому вложеному елементі, затем на його родітєлі якшо він є і так вище і вище піднімаючись по іерархії

// btns.forEach(item => {
//     console.log(item);
//     item.addEventListener('click', deleteElement, {once: true}); // 3 значення (once) дозволяє лиш 1 раз реагувати на собитія
//   });
  

// const link = document.querySelector('.ref');

// link.addEventListener('click', (e) => {
//   e.preventDefault(); // міняє поведєніє ссилки на таке яке вкаже програміст нище

//   console.log(e.target); // є посиланням на об'єкт який відправив подію (<button id="btn"></button>)
// });

//                      032 DOM TREE

// console.log(document.head); // отримати елемент head
// console.log(document.documentElement); // отримати html із всім содержимим які в ньому є
// console.log(document.body.childNodes); // дозволяє получити всі ноди й вузли які знаходяться внутрі цього родітєля (в даному випадку body)

// console.log(document.body.firstChild); // отримати перший елемент
// console.log(document.body.firstElementChild); // отримати перший елемент
// console.log(document.body.lastElementChild); // отримати останній елемент
// console.log(document.body.lastChild); // отримати останній елемент


// отримати родітєля, сосіда і дітей
// console.log(document.querySelector('#current').parentNode.parentNode); // отримати родітєля на 2 уровня вище
// console.log(document.querySelector('#current').parentElement); // отримати родітєля на 1 уровень вище

// console.log(document.querySelector('[data-current="3"]').nextSibling); // отримати наступну ноду після data-current
// console.log(document.querySelector('[data-current="3"]').previousSibling); // отримати попередню ноду після data-current

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // отримати наступний елемент після data-current

// for (let node of document.body.childNodes) {
//   if(node.nodeName == '#text'){
//     continue;
//   }
//   console.log(node);
// }

//                        034 EVENTS ON MOBILES

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//   const box = document.querySelector('.first');

//   box.addEventListener('touchstart', (e) => {
//     e.preventDefault();

//     console.log('start');
//     console.log(e.touches);
//   });

//   box.addEventListener('touchmove', (e) => {
//     e.preventDefault();

//     console.log('move');
//     console.log(e.targetTouches[0].pageX);
//   });

//   box.addEventListener('touchend', (e) => {
//     e.preventDefault();

//     console.log('end');
//   });
// });

// touches
// targetTouches
// changedTouches

//                      035 async / defer

// function loadScript(src) {
//   const script = document.createElement('script');
//   script.src = src;
//   script.async = false;
//   document.body.append(script);
// }

// loadScript('js/test.js');
// loadScript('js/some.js');

//                     037 ClassList
// const btns = document.querySelectorAll('button');
// const wrapper = document.querySelector('.first');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if(btns[1].classList.contains('red')) {
//   console.log('red');
// }

// btns[0].addEventListener('click', () => {
  // if(!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }

  // btns[1].classList.toggle('red');

// });

// console.log(btns[0].className);


//   Delegating events
// wrapper.addEventListener('click', (e) => {
//   // console.dir(e.target);
//   if(e.target && e.target.tagName == 'BUTTON') {
//     console.log('Hello');
//   }
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);

//              039 setTimeout & setInterval

// const btn = document.querySelector('.btn');
// let timerId;
// let i = 0;

// btn.addEventListener('click', () => {
//   // const timerId = setTimeout(logger, 2000);
//   timerId = setInterval(logger, 2000);
// });

// clearInterval(timerId);

// function logger(){
//   if(i === 3) {
//     clearInterval(timerId);
//   }
//   console.log('hello');
//   i++;
// };


// function myAnimation() {
//   const elem = document.querySelector('.box');
//   let pos = 0;

//   const id = setInterval(frame, 10);
//   function frame(){
//     if(pos === 300){
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }

// btn.addEventListener('click', myAnimation);

//                     040 DATE

// const now = new Date(); // date now
// const now = new Date(0); // date 1970-1-1
// const now = new Date(-999999999999); // date 1938-04-24

// console.log(now.setHours(18));
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// let start = new Date();

// for(let i = 0; i < 100000; i++){
//   let some = i ** 3;
// }

// let end = new Date();

// alert(`Цикл отработал за ${end - start} мс`);

//              042 doc params

// const box = document.querySelector('.box');
// const btn = document.querySelector('button');
// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

// btn.addEventListener('click', () => {
//   // box.style.height = box.scrollHeight + 'px';
//   console.log(box.scrollTop);
// })

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);

// console.log(style.display);

// console.log(document.documentElement.scrollTop);

// window.scrollBy(0, 400);
// window.scrollTo(0, 400);

//                045 FUNC-CONSTRUCTORS

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// User.prototype.exit = function() {
//   console.log(`User ${this.name} exit`);
// }

// const ivan = new User('Ivan', 25);
// const alex = new User('Alex', 20);

// ivan.exit();

// ivan.hello();

//                      046 THIS

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function(){
//     console.log(this);
//   }
// };
// obj.sum();

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//   return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обична функція: this = window, но якщо use strict - undefined
// 2) Контекст у методів обєкта - сам обєкт
// 3) this в конструкторах і класах це новий екземпляр обєкта
// 4) Ручная привязка this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//   this.style.backgroundColor = 'red';
// })

// const obj = {
//   num: 5,
//   sayNumber: function() {
//     const say = () => {
//       console.log(this.num);
//     }
//     say();
//   }
// }

// obj.sayNumber();

//                  047 Classes ES6

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// class ColoredRectangleWithText extends Rectangle {
//   constructor(height, width, text, bgColor) {
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;
//   }

//   showMyProps() {
//     console.log(`Text: ${this.text}, Color: ${this.bgColor}`);
//   }
// }

// const div = new ColoredRectangleWithText(24, 10, 'Hello', 'red');

// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);

// console.log(square.calcArea());

// 							049 REST Operator
// Оператор rest принімає n-ну кількість аргументів, spread навпаки розкладує масив на отдільні елементи
// const log = function(a, b, ...rest) {
// 	console.log(a, b, rest);
// }

// log('basic', 'rest', 'Operator', 'usage');

// function calcOfDouble(num, basis = 2) {
// 	// basis = basis || 2; // ES5
// 	console.log(num * basis);
// }

// calcOfDouble(3);

//            051 JSON

// const persone = {
//   name: 'Valerii',
//   tel: '+380999999',
//   parents: {
//     mom: 'Olga',
//     dad: 'Mike'
//   }
// };

// console.log(JSON.stringify(persone)); // send data to server (stringify)
// console.log(JSON.parse(JSON.stringify(persone))); // get data from server (parse)

// const clone = JSON.parse(JSON.stringify(persone));
// clone.parents.mom = 'Ann';
// console.log(persone); // виведе старий обєкт
// console.log(clone); // виведе новий модифікований обєкт



//          052 AJAX

// const inputRub = document.querySelector('#rub');
// const inputUsd = document.querySelector('#usd');

// inputRub.addEventListener('input', () => {
//   const request = new XMLHttpRequest();

//   // request.open(method, url, async, login, pass);

//   request.open('GET', 'js/current.json');
//   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//   request.send();

//   request.addEventListener('load', () => {
//     if(request.status === 200) {
//       const data = JSON.parse(request.response);
//       inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//     } else {
//       inputUsd.value = "Error";
//     }
//   });

//   // status
//   // statusText
//   // response
//   // readyState
// });

//                  055 Promise (ES6)

// console.log('Запрос даних...');

// const req = new Promise(function(resolve, reject){
// setTimeout(() => {
//   console.log('подготовка даних...');

//   const product = {
//     name: 'TV',
//     price: 2000
//   }

//   resolve(product);

// }, 2000);
// });

// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       // reject();
//       resolve(product);
//     }, 2000);
//   });
// }).then(data => {
//   data.modify = true;
//   return data;
// }).then(data => {
//   console.log(data);
// }).catch(() => {
//   console.error('Произошла ошибка');
// }).finally(() => {
//   console.log('finally');
// })

// const test = time => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// }

// test(1000).then(() => {
//   console.log('1000ms');
// });

// test(1000).then(() => {
//   console.log('2000ms');
// });


// all виконуєсться після останнього setTimeout
// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log('all');
// });

// race виконується після першого setTimeout
// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log('all');
// });


//            056 Fetch

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   body: JSON.stringify({name: 'alex'}),
//   headers: {
//     'Content-type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(json => console.log(json));

//               057 Array search methods

// filter
// const names = ['ivan', 'ann', 'ksenia', 'voldemar'];
// const shortNames = names.filter(function(name) {
//   return name.length < 5;
// });
// console.log(shortNames);

// map
// const answers = ['ivAn', 'aNNa', 'Hello'];
// const result = answers.map(item => item.toLowerCase());
// console.log(result);


// every/some
// const some = [4, 'qwq', 'dfsdffa'];
// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4,5,1,3,2,6];
//                   // 0    4
//                   // 4    5
//                   // 9    1
//                   // 10   3
// const result = arr.reduce((sum, current) => sum + current, 3);
// console.log(result);


// const arr = ['apple', 'pear', 'plum'];

// const result = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result);

// const obj = {
//   ivan: 'persone',
//   ann: 'persone',
//   dog: 'animal',
//   cat: 'animal'
// }

// const newArr = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArr);


//             064 Local Storage
// localStorage.setItem('number', 5);
// localStorage.getItem('number');

// localStorage.removeItem('number');

// localStorage.clear();


//             065 regular expressions

// new RegExp('pattern', 'flags');
// /pattern/f

// Search

// const ans = prompt('Enter your number');

// const reg = /\d/g;
// console.log(ans.match(reg));

// const str = 'my name is R2D2';

// console.log(str.match(/\w\d\w\d/i));

// \D
// \W

// \d
// \w
// \s

// i
// g
// m

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('pass');

// console.log(pass.replace(/\./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

//                068 Акцесори - Getter & Setter

// const persone = {
//   name: 'Alex',
//   age: 25,

//   get userAge() {
//     return this.age;
//   },
//   set userAge(num) {
//     this.age = num;
//   }
// };

// console.log(persone.userAge);
// console.log(persone.userAge = 30);

//              069 інкапсуляція

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;  
  }

  say() {
    console.log(`Username: ${this.name}, Age: ${this._age}`);
  }

  get age(){
    return this._age;
  }

  set age(age){
    if(typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('непопустиме значення');
    }
  }

}

const ivan = new User('Ivan', 25);
console.log(ivan.age);
ivan.age = 99;

ivan.say();