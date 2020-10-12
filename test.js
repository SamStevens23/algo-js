// console.log("It works !!!"); 
const readlineSync = require("readline-sync");

// EXCERCISE 1.0

// console.log(3+5)
// console.log(7*8)
// console.log(0-19)
// console.log(19/3)
// console.log(19%3)

//EXCERCISE 1.1

// let name = "Sam"
// console.log(name)

//EXCERCISE 1.2

// let myName = "Stevens";
// let firstName = "Sam ";
// let city = "Brussels";
// console.log("My name is " + firstName + myName + " and I live in " + city);

// EXERCISE 1.3

// let userName = readlineSync.question("What's your name?");
// console.log("Hello " + userName);

// EXERCISE 1.4

// let bio = readlineSync.question("What is your name & location?");
// console.log(bio);

// EXERCISE 1.5

// let answerOne = readlineSync.question ("Please give me one decimal number")
// let answerTwo = readlineSync.question ("Please give me another decimal number")
// let answerThree = ((Math.round(answerOne)) * answerTwo)
// console.log(answerThree)

// EXERCISE 1.6

// let answerOne = readlineSync.question ("Please give me one integer")
// let answerTwo = readlineSync.question ("Please give me another integer")
// let answerThree = (answerOne%answerTwo)
// console.log(answerThree)

// EXERCISE 1.7

// let answerOne = readlineSync.question ("What is your shoe size")
// let answerTwo = readlineSync.question ("When were you born?")
// let answerThree = ((((answerOne*2) + 5) - (answerTwo)) + 1766)
// console.log(answerThree)

// EXERCISE 1.8

let answerOne = readlineSync.question ("Where were you born?")
let answerTwo = readlineSync.question ("What is your favorite color?")
let answerThree = readlineSync.question ("What age are you?")
console.log("There once was a cow named " + answerOne + " with a beautiful " + answerTwo + "-colored fur and " + answerThree + " spots")