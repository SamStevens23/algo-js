// EXERCISE 1

let arr = [1, 2, 3, 4, 5];
let n = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);
console.log(n)

// EXERCISE 2

let arr = [1, 2, 3, 4, 5];
let n = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);
let m = n/arr.length;
console.log(m)

// EXERCISE 3

numbers = [1, 2, 3];
numbersCopy = [];

for (i = 0; i < numbers.length; i++) {
  numbersCopy[i] = numbers[i];
}
console.log(numbersCopy)

// EXERCISE 4

nums = [1, 2, 3, 4, 5]
let n = Math.min.apply(Math, nums)   
let m = Math.max.apply(Math, nums) 
console.log(n, m)

