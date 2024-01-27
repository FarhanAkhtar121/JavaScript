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

/*******************************Operations***************************/

value = 33
negValue = -value

console.log(negValue);

let str1 = "Hello "
let str2 = "Farhan"

let str3 = str1 + str2

console.log(str3);      

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

let gameCounter =300;
gameCounter++;   // Postfix
// ++ gameCounter  Prefix
console.log(gameCounter);


