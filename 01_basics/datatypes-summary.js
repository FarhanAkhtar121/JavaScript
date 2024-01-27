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

/****************************************************Memory in JS ****************************************** */

//Stack Memory - All primitive DataType

//Heap Memory - All Non Primitive DataType

let myYoutubename ="techwiz"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename)
console.log(anotherName);


//heap memory

let user1 = {
    email : "someone@gmail.com",
    upi_id : "someoneOkhdfc@bank"

}

let user2 = user1

user2.email = "newone@gmail.com"

console.log(user1.email);
console.log(user2.email)
