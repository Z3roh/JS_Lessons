// 1
let num = 15;
if (num >= 22 && num <= 33) {
    console.log(num);
} else {
    console.log('The variable is wrong. Try again');
}

// 2

let log = prompt('Enter your login:');

if (log === 'AdminUser') {
    let passcode = prompt('Enter your password:');
    if (passcode === 'admin123') {
        alert('You are logged in');
    } else if (!passcode) {
        alert('Invalid format');
    } else {
        alert('Invalid password');
    }
} else if (!log) {
    alert('Invalid format');
} else {
    alert('This user is not found');
}