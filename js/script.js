'use strict';

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/

// 1st part

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}
start();

// 2nd part

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// Код Ивана работает!

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}  
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Посмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    
}

showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         const filmFirst = prompt(`Ваш любимый жанр под номером ${i}`);
//         if (filmFirst != '' && filmFirst != null && filmFirst.length < 50) {
//             personalMovieDB.genres[i - 1] = filmFirst;
//             console.log('Done');
//         } else {
//             i--;
//             console.log('Error');
//         }
//     }
// }
// writeYourGenres();
// console.log(personalMovieDB);

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
      
//     }
// }
// writeYourGenres();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        perdonalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        if (perdonalMovieDB.genres[i - 1] != '' && perdonalMovieDB.genres[i - 1] != null && perdonalMovieDB.genres[i - 1].length < 50) {
            return personalMovieDB.genres[i - 1];
        } else {
            i--;
            console.log('Error');
        }
    }
}
writeYourGenres();