## var is function-scoped. T

\*\*\*function example() {
console.log(a); // undefined (due to hoisting)
var a = 10;
console.log(a); // 10

if (true) {
var a = 20;
console.log(a); // 20
}

console.log(a); // 20 (function-scoped)
}

example();\*\*\*

## let/const is block-scoped.

`Variables declared with let/const, Accessing the variable before its declaration results in a ReferenceError.`

\*\*\*function example() {
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); // 10

if (true) {
let b = 20;
console.log(b); // 20 (block-scoped)
}

console.log(b); // 10 (outside the block, back to the previous value)
}

example();\*\*\*

# Destructuring makes it easy to extract only what is needed.

# The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

# Named exports must be destructured using curly braces. Default exports do not.
