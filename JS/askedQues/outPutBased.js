console.log("Before");
for (let i = 1; i < 4; i++) {
  // let variable
  setTimeout(() => console.log(i), 1000);
}
console.log("After", i);
// O/P  -
// Before
// After
// 1
// 2
// 3

console.log("Before");
for (var i = 1; i < 4; i++) {
  // var variable
  setTimeout(() => console.log(i), 1000);
}
console.log("After", i);
// O/P  -
// Before
// After, 4
// 4
// 4
// 4
// REASON - var variable will be created once and reassined everytime in for loop as let will create new variable each time.
// setTimeout() will have closure property so those variables are accessible even after some time.

console.log("start");
setTimeout(() => console.log("time"), 0);
Promise.resolve().then(() => console.log("prom"));
console.log("last");

// O/P  -
// start
//last
//prom
//time

// REASON - two call back queues will be there callback queue and microtask queue --- microtask queue will
// have higher presedence than callback queue.

let x = false;
let y = "0";
let z = 0;

console.log(x == y); //true
console.log(x == z); //true

//REASON - In JavaScript, when you use the == operator to compare values of different types,
//the operands will be converted to a common type before the comparison is made. This process is called type coercion.
