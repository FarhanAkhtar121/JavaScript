const accountId= 144553
let accountEmail = "aryanakhtar1989@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 4// not allowed
console.log(accountId);
/*
Please do not use var keyword instead use let keyword while declaring variables, because of block scop and functional scop issue.
*/

accountEmail = "raj@gmail.com"
accountPassword = "4528"
accountCity = "Ranchi"

console.table([accountEmail,accountId,accountPassword,accountCity])