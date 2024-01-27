/******************** Primitive DataType*******************************************/

// 7 types : String, Number, Boolean, BigInt, null, undefined, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTempratue = null
let userEmail;

const id = Symbol("1234")   //unique id
const anotheId = Symbol("1234")  // unique id

console.log(id === anotheId);  //false



/*************************Non Premitive (Refernce DataType) *********************************/ 

//Array, Objects, Functions

const heroes = ["Shaktiman", "Nagraj", "Druva", "Doga"]

let myObj = {
    name: "Farhan Akhtar",
    id: 348,
    address: "M Ali Lane",
    city: "Ranchi"
}

const myFunction = function(){
    console.log("Hello World!")
}

console.log(myObj)
console.log(myFunction)