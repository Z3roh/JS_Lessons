//#2

const summary = 25;
const a = 5;
const b = 6;
/*if ((a * b) == summary) {
    alert(`The number ${summary} is not ${a * b}`);
} else if ((a * b) > summary) {
    alert(`The number ${summary} is smaller than ${a * b}`);
} else {
    alert(`The number ${summary} is bigger than ${a * b}`);
}*/

/*(a * b) == summary ? alert(`The number ${summary} is not ${a * b}`) : 
(a * b) > summary ? alert(`The number ${summary} is smaller than ${a * b}`) :
alert(`The number ${summary} is bigger than ${a * b}`);
*/

//#3

/*let num = Number(prompt('Enter a number: ', ''));
let rightAnswer = 'You guessed it! Gratulation!';

if (num * 1 == 2022) {
   alert(rightAnswer);
} else if (num !== Number){
   alert('Guessed not acceptable values');
} else {
    alert('Try again');
}*/

const value = prompt('enter a number: ');
console.log(Number(value));
console.log(typeof (Number(value)));
console.log(NaN === NaN);

let rightAnswer = 'You guessed it! Gratulation!';

if (Number(value) === 2022) {
    alert(rightAnswer);
} else if (isNaN(value)) {
    alert('Guessed not acceptable values')
} else {
    alert('Try again');
}