'use strict';

// N1

for (;;) {
    let userName = prompt('Enter a name: ', '');
    if (userName === 'Igor') {
        console.log(userName);
        break
    } else if (!userName) {
        break
    } else if (+userName) {
        alert(`'${userName} is a number. PLeas try again.`);
    } else {
        alert('Please try again');
    }
}

// N2

for (let i = 5; i <= 15; i++) {
    console.log(i);
}

// N3

let n = 10;

for (let i = 2; i < (n - 2); i++) {
    for (;i < 3;) {
        console.log(i)
        break
    }

    if (i % 2) {
        console.log(i)
        continue
    }
}