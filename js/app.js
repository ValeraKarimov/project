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

const personalMovieDB = {
  count: 0,
  movies: {
  },
  actors: {},
  genres: [],
  privat: false,
  start: function() {
personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
personalMovieDB.detectPersonalLevel(personalMovieDB.count);
while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
}
},
rememberMyFilms: function() {
for(let i = 1; i < 2; i++) {
const answer1 = prompt('Один из последних просмотренных фильмов?', '');
if(answer1.length > 50){
  console.log('ввести название фильма длинее, чем 50 символов');
  i--;
} else if (answer1.length === 0) {
  console.log('zero');
  i--;
} else {
  const answer2 = prompt('На сколько оцените его?', '');
  personalMovieDB.movies[answer1] = answer2;
}
 
}	
},
detectPersonalLevel: function() {
if(personalMovieDB.count < 10) {
console.log("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
console.log("Вы классический зритель");
} else if(personalMovieDB.count > 30) {
console.log("Вы киноман");
} else {
console.log("Произошла ошибка");
}

},
showMyDB: function(privat) {
if(privat == false) {
console.log(personalMovieDB);
}
},
toggleVisibleMyDB: function() {
if(personalMovieDB.privat === false) {
personalMovieDB.privat = true;
} else {
personalMovieDB.privat = false;
}
},
writeYourGenres: function() {
for(let i = 1; i <= 3; i++){
  let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
  if(genre == '' || genre == null) {
    console.log('incorect text');
    i--;
  } else {
    personalMovieDB.genres[i - 1] = genre;
  }
}
  personalMovieDB.genres.forEach((item, i) => {
    console.log(`Любимый жанр ${i + 1} - это ${item}`);
  });
}


};