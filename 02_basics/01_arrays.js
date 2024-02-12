// array

const myArr = [0,1,8,3,4,5] 
console.log(myArr[0]);


const myHeroes = ["IronMan", "SuperMan", "SpiderMan", "Thor"];

const myArr2 = new Array(4,2,5,9,8)
console.log(myArr2.length);


// Array Methods

myArr.push(6)
myArr.push(7)  // add given value to array at last
myArr.pop()  //remove last value

myArr.unshift(9)  // adding 9 to first position
console.log(myArr);

myArr.shift()  // remove first element from array
console.log(myArr);

const newarr = [9,4,3,2,8]
console.log(newarr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(2));  // what is the index of element "2" in the array

// slice and splice

console.log("A", myArr);

const mynew1 = myArr.slice(1,3) // showing element from index 1 to before 3 but did not remove these elements from the main array
console.log(mynew1);
console.log("B", myArr);

const mynew2 = myArr.splice(1,3) // showing element from index 1 to 3 and remove these element from the main array
console.log(mynew2);
console.log("C", myArr);