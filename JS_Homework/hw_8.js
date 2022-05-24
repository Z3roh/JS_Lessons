'use strict';

//1
function checkAccess(age) {
  return  (age > 18) ? true : 'Acces denied';
}

let result = checkAccess(19);
console.log(result);

function checkAccess(age) {
    return (age > 18) || 'Acces denied';
}

result = checkAccess(19);
console.log(result);

//2
function compare(num, num_1) {
    (num > num_1) ? console.log(num) : console.log(num_1);
}

compare(20, 23);


//3
function calc(num_1, num_2) {
    return num_1 + num_2;
}

let mathOperation = calc(23, 45);
console.log(mathOperation);

//4
function checkType(test) {
    if (Number(test)) {
        console.log(typeof(test));
    } else if (String(test)) {
        console.log(typeof(test));
    } else if (!test) {
        console.log('This type is undefiened');
    } else {
        console.log('Bla bla');
    }
}

checkType('Hello');