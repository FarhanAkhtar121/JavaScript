

function myName(){
    console.log("F");
    console.log("A");
    console.log("R");
    console.log("H");
    console.log("A");
    console.log("N");
}

myName();

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
   // let result = (number1 + number2)
   // return result
   return number1 + number2
}

const result = addTwoNumbers(3,4)  //calling function with arguments

console.log("result is: ", result);


function userLoginMessage(username){

    return `${username}, just logged in`
}

console.log(userLoginMessage("farhan"));

function message2(name){
if(name === undefined){
    console.log("Please enter your name!");
    return 
}

    return `${name}, how are you?`
}

console.log(message2());  // empty argument will give undefined