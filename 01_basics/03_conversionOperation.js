let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score1 = "33abc"

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let a = null
let b = Number(a)
console.log("b is: "+ b);

// "33" => 33
// "33abc" => NaN  /Not a Number
// true => 1; false =>0
// "" => false
// "farhan" => true

let num1 = 33

let stringNum1 = String(num1)
console.log(typeof stringNum1);
console.log(stringNum1);