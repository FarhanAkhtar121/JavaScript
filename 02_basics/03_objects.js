// object literals

const JsUser = {
  name: "Farhan",
  "full name": "Farhan Akhtar",
  age : 30,
  location: "Ranchi",
  email: "aryanakhtar1989@gmail.com",
  isLoggedIn: false,
  lastLogindays: ["Monday", "Saturday"]

}

console.log(JsUser)

console.log(JsUser.email); // printing email of Jsuser
console.log(JsUser["email"]);  // printing email for Jsuser
console.log(JsUser["full name"]);

JsUser.greeting=function(){
console.log("Hello JsUser!")
}

console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
  console.log(`Hello JsUser, ${this.name}`);
}

console.log(JsUser.greetingTwo());