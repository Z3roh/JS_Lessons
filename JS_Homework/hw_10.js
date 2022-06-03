//1

let res = null;
let x = null;

function checkAge(father, son) {
    res = son * 2;
    if (father > son * 2) {
        x = father - res;
        console.log(`Father was for ${x} years two times older than his son`);
    } else if (father < son * 2) {
        let y = (father - son) + son;
        console.log(`Father becomes two times older than his son in ${y}`);
    }
}


checkAge(35, 25); 

//2

function colors(color) {
    color === 'red' || color === 'yellow' || color === 'green' || color === 'blue' || color === 'violet';
}

function checkRainbow(color) {
    if(color === 'red' || color === 'yellow' || color === 'green' || color === 'blue' || color === 'violet') {
        return `${color} is in the rainbow`;
    } else {
        return 'This is not a color from the rainbow';
    }
}

res = checkRainbow('violet');
console.log(res);

function checkRainbow(color) {
    color === 'red' || color === 'yellow' || color === 'green' || color === 'blue' || color === 'violet' ? console.log(`${color} is in the rainbow`) :
    console.log('This is not a color from the rainbow');
}

res = checkRainbow('violet');
console.log(res);

function checkRainbow(color) {
    switch(color) {
        case 'red':
            console.log(`${color} is in the rainbow`);
            break;
        case 'yellow':
            console.log(`${color} is in the rainbow`);
            break;
        case 'green':
            console.log(`${color} is in the rainbow`);
            break
        case 'blue':
            console.log(`${color} is in the rainbow`);
            break;
        case 'violet':
            console.log(`${color} is in the rainbow`);
            break;
        default:
            console.log('This is not a color from the rainbow');       
    }
}

checkRainbow('violet');
