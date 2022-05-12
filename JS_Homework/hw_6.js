/*let value = prompt('Enter color: ', '');

if(value === 'Red') {
    console.log(`Your write ${value} color`);
} else if (value === 'White' || value === 'Grey') {
    console.log(`We don't support ${value} color!`);
} else {
    console.log('Try to write another color');
} */

let value = +prompt('Enter a NUMBER: ','');

switch (true) {
    case value === 0:
        console.log('Ỳou write 0');
        break
    case value > 5:
        console.log('Your value more 5');
        break
    case value > 2 || value < 10:
        console.log('Your value more 2 and less 10');
        break
    case value > 10 && value !== 15:
        console.log('I think it is better');
        break
    default:
        console.log('You are not right');
}