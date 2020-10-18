const readlineSync = require("readline-sync");
// EXERCISE 1
// function askTvSerie() {

// let nameShow = readlineSync.question ("What is the name of your favorite show? ");
// let produce  = readlineSync.question ("When was it produced? ");
// let n = readlineSync.question ("How many cast members will you choose? ");

// let arr = [];

// for (let i = 0; i < n; i ++) { 

//     let members = readlineSync.question ("Name a member ");
//     arr.push(members);

// }
// let myObject = {

//     "name": nameShow,
//     "production_year": produce,
//     "cast_members": arr
// };


// return myObject;

// }

// console.log(JSON.stringify(askTvSerie()));

//////////////////////////////////////////////////////////////////////////////////////////////////////

// EXERCISE 2

let n = readlineSync.question ("How many cast members will you choose? ");

let arr = [];

for (let i = 0; i < n; i ++) { 

    let members = readlineSync.question ("Name a member ");
    arr.push(members);

}

// the Fisher-Yates Shuffle

function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
      
        let index = Math.floor(Math.random() * counter);

        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}


let random = shuffle(arr);

console.log(random);


///////////////////


















