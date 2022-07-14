'use strict';


// Написати функцію яка буде робити deep (глибоку) копію об'єкта.

/* let salaries = {
    name: 'John',
    age: 22,
    role: {
        isAdmin: true,
    },
};

let copy = {};

function cpOb() {
    return copy = {...salaries, role: {...salaries.role},};
}

cpOb();

salaries.role.isAdmin = false;
console.log(copy);
console.log(salaries); */

// Зробити глибоку копію об'єкта 3 способами ( тернарка, for, assign)

let salaries = {
    name: 'john',
    age: 22,
    address: {
      street: 'Shevchenka 10',
      city: 'Kiev',
      country: 'Ukraine'
    },
    property: {
        isActive: true,
        isAdmin: false,
        wallet: {
            balance: 1000,
        },
    },
};

// 1

//let clone_1 = {...salaries, address: {...salaries.address}, property: {...salaries.property, wallet: {...salaries.property.wallet}}};

//console.log(clone_1);

// 2

/* let clone_2 = Object.assign({}, salaries);
clone_2.address = Object.assign({}, salaries.address);
clone_2.property = Object.assign({}, salaries.property);
clone_2.property.wallet = Object.assign({}, salaries.property.wallet);

salaries.address.city = 'Berlin';
salaries.property.wallet = 'HI';

console.log(clone_2);
console.log(salaries); */

// 3

/* let clone = {};

for(let key in salaries) {
    clone[key] = salaries[key];
};

for(let key in salaries.address) {
    clone[key] = salaries.address[key];
}; */

/* for(let key in salaries.address) {
    clone.property[key] = salaries.property[key];
};

for(let key in salaries.address) {
    clone.property.wallet[key] = salaries.property.wallet[key];
}; */

/* salaries.property.wallet = 'HI';
salaries.address.city = 'Berlin';

console.log(clone); */

/* let clone = {}; 
  let key;

  for (key in salaries) {
    clone[key] = salaries.address,salaries.property[key]; 
  }

console.log(clone); */


//Написати функцію як буде робити об'єкт верхнього рівня (буз вкладень)

/* 
let salaries = {
    name: 'john',
    age: 22,
   address: {
      street: 'Shevchenka 10',
      city: 'Kiev',
      country: 'Ukraine'
    },
  property: {
      isActive: true,
      isAdmin: false,
      wallet: {
          balance: 1000
        },
    },
};

function changeObj(salaries) {
    let clone = {...salaries,}
} */


function cloneObj(salaries) {
    let clone = {};

    Object.assign(clone, salaries, salaries.address, salaries.property, salaries.property.wallet);

    delete clone.property;
    delete clone.address;
    delete clone.wallet;
    return clone;
}

let obj = cloneObj(salaries);
console.log(obj);