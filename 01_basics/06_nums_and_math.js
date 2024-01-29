const score = 100

console.log(score);

const balance = new Number(455);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anotherNumber = 129.3258

console.log(anotherNumber.toPrecision(4));
console.log(anotherNumber.toPrecision(3));
console.log(anotherNumber.toPrecision(1));

const hundreds = 100000

console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

/* ++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++ */

console.log(Math);

console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.min(4,53,9,2,5));
console.log(Math.max(23,12,65,58,97,78));

console.log(Math.random()); // O/p number b/w 0 and 1

console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min =10;
const max = 20;

console.log(Math.floor((Math.random()*(max-min)) + min));



