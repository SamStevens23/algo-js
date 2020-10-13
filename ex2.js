const readlineSync = require("readline-sync");

// EXERCISE 2.1

let age = readlineSync.question ("What age are you?")
if ((age >= 18)) {
    console.log("You are an adult");
  } else {
    console.log("You are not yet an adult");
  }

// EXERCISE 2.2

let min = readlineSync.question("Give a low number ");
let current = readlineSync.question("Give a random number ");
let max = readlineSync.question("Give a high number ");
if (current>min && current<max) {
    console.log(current);
  } else {
    console.log("ERROR");
  }

// EXERCISE 2.3

let i = 1
while (i <= 100) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i += 1
}

// EXERCISE 2.4

let i = 1
while (i <= 100) {
    if (i % 2 == 0) {
        let x = i/2
        console.log(x);
    }
    if (i % 2 !== 0) {
        let x = i*3
        console.log(x);
    }
    i += 1
}

// EXERCISE 2.4

let favNum = readlineSync.question ("What is your favorite number? ")
    while (favNum !== 8) {
            console.log("Are you sure? ")
            let favNum = readlineSync.question ("What is your FAVORITE number? ")
        }


// EXERCISE 2.5

let favNum = readlineSync.question ("What is your favorite number? ");
let favNumb = Number(favNum);

while (favNumb !== 42) {
        console.log("Are you sure? ")
        let favNum2 = Number(readlineSync.question ("What is your FAVORITE number? "));
        
        if (favNum2 === 42) {
        console.log("Hooray!");
        break;
        }

}

// EXERCISE 2.6

let weekday = readlineSync.question ("Gimme a number between 1 & 7! ")

if (weekday == 1) {
    console.log("Monday")
}

if (weekday == 2) {
    console.log("Tuesday")

}if (weekday == 3) {
    console.log("Wednesday")

}if (weekday == 4) {
    console.log("Thursday")

}if (weekday == 5) {
    console.log("Friday")

}if (weekday == 6) {
    console.log("Saturday")
}

if (weekday == 7) {
    console.log("Sunday")
}
    
// EXERCISE 2.6

let n = readlineSync.question("Give me a number ");
let sol = 0;

for (let i = 1; i <= n; i += 1) {

    let x = readlineSync.question("One more please!");
    let disNumber = Number(x);
    sol += disNumber;
    
}
console.log(sol);