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
// start();

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

// showMyDB(personalMovieDB.privat);

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

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
      
    }
}
// writeYourGenres();

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         perdonalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//         if (perdonalMovieDB.genres[i - 1] != '' && perdonalMovieDB.genres[i - 1] != null && 
// perdonalMovieDB.genres[i - 1].length < 50) {
//             return personalMovieDB.genres[i - 1];
//         } else {
//             i--;
//             console.log('Error');
//         }
//     }
// }
// writeYourGenres();

// Задача №1
// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда
//  используется  в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ
//  выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении
//  произошла ошибка"
//  НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, 
// что этот оператор из более нового стандарта, чем тут доступен.
// Примеры:
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

function calculateVolumeAndArea(n) {
    if (Number.isInteger(n) && n > 0 && typeof(n) === 'number') {
        return `Объем куба: ${n * n * n}, площадь всей поверхности: ${n * n * 6}`;
    } else {
        return `При вычислении произошла ошибка`;
    }
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));
console.log(calculateVolumeAndArea(7));

function getCoupeNumber(num) {
    if (typeof(num) === 'number' || num < 0 || !Number.isInteger(num)) {
        return `Ошибка. Проверьте правильность введенного номера места`;
    } else if (num >= 37 || num === 0) {
        return `Таких мест в вагоне не существует`;
    } else {return Math.ceil(num / 4);
   
}
}

console.log(getCoupeNumber('25'));

// // 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 
// (Смотри пример).  Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо
//  аргумента приходит не число,дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// // Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут
//  раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот
//   промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// Пример:
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"



function getTimeFromMinytes(min) {
    let hour = Math.floor(min / 60);
    let minutes = min - (Math.floor(min / 60) * 60);
    let condition = typeof(min) === 'number' && min >= 0 && Number.isInteger(min); 

    if (condition) {
        if (hour === 1) {
            return `Это ${hour} час и ${minutes} минут`;
        }
            if (hour >= 2 && hour <= 4) {
            return `Это ${hour} часа и ${minutes} минут`;
        }
        if (hour === 0 || hour >= 5 && hour <=10) {
            return `Это ${hour} часов и ${minutes} минут`;
        }
        
        return 'Ошибка, проверьте данные';
    } else {
        return 'Ошибка, проверьте данные';
    }

    // if (condition && hour === 1) {
    //     return `Это ${hour} час и ${minutes} минут`;
    //   } else if (typeof(min) === 'number' && min >= 0 && Number.isInteger(min) && hour >= 2 && hour <= 4)
    //    {
    //     return `Это ${hour} часа и ${minutes} минут`;
    //   } else if (typeof(min) === 'number' && min >= 0 && Number.isInteger(min) && hour === 0) {
    //     return `Это ${hour} часов и ${minutes} минут`;
    //   } else if (typeof(min) === 'number' && min >= 0 && Number.isInteger(min) && hour >= 5 && hour <=10){
    //     return `Это ${hour} часов и ${minutes} минут`;
    //   } else {
    //     return 'Ошибка, проверьте данные';
    //   }
}

// console.log(getTimeFromMinytes(150));
// console.log(getTimeFromMinytes(50));
// console.log(getTimeFromMinytes(0));
// console.log(getTimeFromMinytes(-150));



function findMaxNumber(a, b, c, d) {
    if (typeof(a) === 'number' && typeof(b) === 'number' && typeof(c) === 'number' && typeof(d) === 'number' && a !== undefined && b !== undefined && c !== undefined && d !== undefined) {
        if (a > b && a > c && a > d) {
            return a;
        }
        if (b > a && b > c && b > d) {
            return b;
        }
        if (c > b && c > a && c > d) {
            return c;
        }
        if (d > b && d > c && d > a) {
            return d;
        }
    } else {
    return 0;
}
}
// console.log(findMaxNumber(8, 18.2, '', 4));

function testBrowser(browser) {
    if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
        console.log('Okay we support these browsers too');
    } else if (browser === 'Edge') {
        console.log("You've got the Edge!");
    } else {
        console.log('We hope that this page looks ok!');
    }
}

// testBrowser();

function switchTest(x) {
    switch(x) {
        case 0:
            return ('Вы ввели число 0');
        case 1:
            return ('Вы ввели число 1');
        case 2:
        case 3:
            return ('Вы ввели число 2, а может и 3');   
    }
}

// console.log(switchTest(3));

function fib(num) {
    let a = 0;
    let b = 1;
    let c = a + b;
    let sum = `0 1`;
    if (typeof(num) === 'number' && Number.isInteger(num) && num !== 0) {
        switch(num) {
            case 1:
                return `${a}`;
            case 2:
                return `${a} ${b}`;
        default:
            for (let i = 3; i <= num; i++) {
                        sum += ` ${c}`;
                        a = b;
                        b = c;
                        c = a + b;
            }
                    return sum;
        } 
    } else {
        return ``;
    }
}

//     switch(num) {
//             case 1:
//                 return `${a}`;
//             case 2:
//                 return `${a} ${b}`;
//                 case 0:
//                 case typeof(num) === 'string':
//                     return '';
//     default:
//     for (let i = 3; i <= num; i++) {
//         sum += ` ${c}`;
//         a = b;
//         b = c;
//         c = a + b;
//     }
//     return sum;
//     }
// }

// console.log(fib(0));

