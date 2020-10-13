const readlineSync = require("readline-sync");


// EXERCISE 1

let a = readlineSync.question ("Give me the width of an imaginary rectangle pls ");
let b = readlineSync.question ("Give me the height of an imaginary rectangle pls ");

function calcSurface(a, b) {
    return a*b;
}

console.log(calcSurface(a,b))

///////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE 2

function rand10() {
    return Math.floor(Math.random() * 11) + 1;  
}

console.log(rand10())

math.random returns a decimal between 0 & 1 - add math.floor to round out to lowest integer, then * 11 + 1 to get a result between 0 and 10

///////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE 3

function rand10() {
    return Math.floor(Math.random() * 11) + 1;  
}

let n = readlineSync.question ("give me a number pls ")

function multiRand(n) {
    let arr = [];
    var i = 0;
    while (i < n) {
    	arr.push(rand10());
        i++;
    }
    console.log(arr);
    return arr;
}

multiRand(n)

///////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE 4

generate random array

function rand10() {
    return Math.floor(Math.random() * 11) + 1;  
}

let n = readlineSync.question ("give me a number pls ")

function multiRand(n) {
    let arr = [];
    var i = 0;
    while (i < n) {
    	arr.push(rand10());
        i++;
    }
  
    return arr;
}

console.log(multiRand(n));

//////////////////////////////////////////

// canculate average

let newArr = new Array;
newArr = multiRand(n);

function average(arr) {
    let sum = 0;
    for (let i in arr) {
        sum += arr[i]
    }
    let total = arr.length;
    return (sum / total)
}

console.log(average(newArr));

/////////////////////////////////////////

// calculate min


let min = (Math.min(...newArr))
console.log(min)

/////////////////////////////////////////

// calculate max 

let max = (Math.max(...newArr))
console.log(max)

///////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE 5

function calcDistance(xa, ya, xb, yb) {

    let a = xa - xb;
    let b = ya - yb;

    let c = Math.sqrt( a*a + b*b );

    console.log(c)
}

calcDistance(1, 1, 2, 2)

///////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE 6

function factorial(a) {
    if (a == 0 || a == 1) {
        return 1;
    }
    else {
    return (a != 1) ? a * factorial(a - 1) : 1;
    }
  
}

console.log(factorial(0))

/////////////////////////////////////////////////////////////////////////////////////////////////////






