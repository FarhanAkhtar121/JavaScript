const name = "Farhan"
const repoCount = 5

console.log(`hello my name is ${name} and my total repo in GitHub is ${repoCount}`);

const gameName = new String('Farhan-rdx-gaming')

console.log(gameName[0]);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));

console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const newString1 = "    Farhan  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://farhan.com/farhan%20akhtar"

console.log(url.replace('%20', '-'))

console.log(url.includes('farhan'));

console.log(gameName.split('-'));


