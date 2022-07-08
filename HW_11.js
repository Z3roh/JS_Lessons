'use strict';


/*
а) Створити порожній об'єкт user.
б) Додати властивість firstName зі значенням John.
в) Додайте властивість lastName зі значенням Smith.
г) Змініть значення firstName на Pete.
д) Видаліть властивість lastName з об'єкта.
 */


/*
let user = {};
user.firstName = 'John';
user.lastName = 'Smith';

user.firstName = 'Pete';
delete user.lastName;

key in undefined

console.log(user);
*/
//Напишіть функцію яка буде приймати об'єкт і повертає true, якщо об'єкт не має властивостей, інакше false.
/*
let y = {};

function x(y) {
    for(let key in y) {
        if(key === undefined) {
            console.log(false);
        } else {
            console.log(true);
        }
        
    }
    console.log(typeof key);
};

y.name = 'Alfred';

x(y);
*/
/*
if(value[undefined]) {
        console.log(true);
    } else {
        console.log(false);
    }
*/
//console.log(some.value)

/**У нас є об'єкт який містить зарплати працівників,
 *  написати функцію яка буде повертати суму всіх зарплат.
 */

/*
let s;

let salaries = {
    John: 100,
    Ann:160,
    Pete: 130,
};

for(let key in salaries) {
    s = salaries[key] + salaries[key] + salaries[key];
};

console.log(s);
*/

/**У нас є об'єкт який містить зарплати працівників, написати код,
 *  який дає мені можливість ввести ім'я людини через promt ,
 *  в результаті код буде повертати, 
 * ‘Igor has 100$ salary’ ( ім'я і зарплата підставляються динамічно).
 *  Якщо такого працівника немає, повертаємо, Даний працівник у нас не працює.
 */
/*
let money = {
    John: 100,
    Ann: 160,
    Pete: 130,
    userName: prompt('Enter a name: ')
};

let key = 'John';
let ann = 'Ann';
let pete = 'Pete';

function checkStuff() {
    if(key === money.userName) {
        return `${key} has ${money.John}$ salary`;
    } else if(ann === money.userName) {
        return`${ann} has ${money.Ann}$ salary`;
    } else if(pete === money.userName) {
        return`${pete} has ${money.Pete}$ salary`;
    } else {
        return'This employee does not work for us';
    };
};

let result = checkStuff();

console.log(result);
*/

//6.Створіть функцію , яка множить всі числові властивості об'єкта obj на 2.І в результаті повертає оновлений об'єкт.

/*

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function test(menu) {
    for(let key in menu) {
        if(+(menu[key])) {
            menu[key] *= 2;
            console.log(menu[key]);
        }
    }
}

test(menu);
*/