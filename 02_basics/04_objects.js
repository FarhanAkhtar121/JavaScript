const tinderUser = {}

tinderUser.id = "12abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regulaUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Farhan",
            latname: "Akhtar"
        }
    }
}

console.log(regulaUser);

// Merging one object with another one

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = Object.assign(obj1, obj2)  // return obj = Object.assign(target obj, source obj)
console.log(obj3);

const obj4 = Object.assign({},obj1, obj2)   
console.log(obj4);

const obj5 = {...obj1 , ...obj2}    // using spread object to merge tqo objects
console.log(obj5);

// /////////////////////////////////// Array of objects /////////////////////////////////////

const users = [
    {
        id: 1,
        email: "new@gmail.com"
    },
    {
        id: 2,
        email: "new2@gmail.com"
    },
    {
        id: 3,
        email: "new3@gmail.com"
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

/////////////////////// Destructring object //////////////////////

const course = {
    coursename : "js in Hindi",
    price: 999,
    name: "Farhan"
}
const{name} = course
console.log(name);

