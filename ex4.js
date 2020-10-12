const readlineSync = require("readline-sync");

// EXERCISE 1

function calcSurface(a, b) {
    return a*b
}

let a = readlineSync.question ("Give me the width of an imaginary rectangle pls ")
let b = readlineSync.question ("Give me the width of an imaginary rectangle pls ")

console.log(calcSurface(a,b))

// EXERCISE 1

