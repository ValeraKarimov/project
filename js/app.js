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
function showMyDB(privat) {
	if(privat == false) {
		console.log(personalMovieDB);
	}
}

function writeYourGenres() {
  for(let i = 1; i <= 3; i++){
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
  }
}



let numberOfFilms;

function start() {
numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
detectPersonalLevel(numberOfFilms);

while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
}
}
start();

      const personalMovieDB = {
        count: numberOfFilms,
        movies: {
        },
        actors: {},
        genres: [],
        privat: false,
      };

      showMyDB(personalMovieDB.privat);



function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel(numberOfFilms) {
	if(numberOfFilms < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if(numberOfFilms >= 10 && numberOfFilms <= 30) {
		console.log("Вы классический зритель");
	} else if(numberOfFilms > 30) {
		console.log("Вы киноман");
	} else {
	  	console.log("Произошла ошибка");
	}
	
}

writeYourGenres();

