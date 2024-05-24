1. primitive: pre-defined DT. 7 kinds of PDT: 1. number 2. string 3. boolean 4. null 5. undefined 6. bigint 7. symbol
2. non-primitive: can be derived from primitive DT. 1. object. 2. array. 3. function.

## typeof `null` is `object`.

## typeof `undefined` is `undefined`

Eg: let a = null; Eg: let b;
a + 10; // 10; b + 10; // NaN

## Global Variable

These are variables that are defined in global scope i.e. outside of functions. These variables have a global scope, so they can be accessed by any function directly. In the case of global scope variables, the keyword they are declared with does not matter they all act the same.
`A variable declared without a keyword is also considered global even though it is declared in the function.`

## Local Variable

When you use JavaScript, local variables are variables that are defined within functions. They have local scope, which means that they can only be used within the functions that define them. Accessing them outside the function will throw an error.

## What is host object?

- -> objects that are provided by the environments are know as host object. Eg: in case of browser `window, document, localStorage, navigator.`
-       in case of nodejs env, global, os, process.
- -> host objects are dependent on the environment.
-

## what is native object?

- -> Objects that are provided by the language are known as native object. Eg: Object, Array, Date, JSON (JSON.parse, JSON.stringify...)

## this

-> `JavaScript this keyword always holds the reference to a single object, which defines the current line of code’s execution context which means this keyword refers to the object that is currently executing the code`
-> The value that this store is the current execution context(GEC or FEC) of the JavaScript program
->Thus, when used inside a function this value will change depending on how that function is defined, how it is invoked, and the default execution context. this keyword will refer to different objects depending on how it is used
-> When this keyword is used in global scope this is set to window object.

1. this alone : refers to the global object.
2. this in function : the global object is the default binding for this.
3. this in strict mode : in strict mode, this is undefined.
4. this in event handlers

## Prototype

Array.prototype.sum = function() {
let sum = 0;
for(let i = 0; i <this.length; i++) {
sum+=this[i];
}
return sum;
}

## Rest

syntax:
fn(...args)
-> benefit to use rest -> easier to work with variable-length argument list.

## Spread

->The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
->The spread operator is often used in combination with destructuring.
`const numbers = [1, 2, 3, 4, 5, 6];`
`const [one, two, ...rest] = numbers;`

## Polyfills

->Polyfill is just a browser fallback. Suppose your browser is older and it doesn’t support the features of a JS that were created for the new browsers. In that case, polyfills comes to your rescue.
->`In short, A polyfill is a browser fallback, made in JavaScript, that allows functionality you expect to work in modern browsers to work in older browsers.`

## https://pranavbakale.hashnode.dev/polyfills-for-call-apply-and-bind

Function.prototype.myCall = function(scope,...args){ //this line spread will be not there for apply
scope.\_this=this;
return scope.\_this(...args)
}
`we are inserting the calling function into the object itself so that this can Worker;`

Function.prototype.myBind = function (scope, ...args) {
scope.\_this = this;
return function() {
return scope.\_this(...args);
};
};

## Deep copy

1. JSON.parse(JSON.stringify(nestedObject));
2. window.structuredClone();

## Flattening an obj

function flattenedObj(obj,del='',parentKey=''){
const flattened={};
for(const key in obj){
if(obj.hasOwnProperty(key) ){
let newKey=parentKey?`${parentKey}${del}${key}`:key;
if(typeof obj[key]==='object' && obj[key] !== null){
Object.assign(flattened,flattenedObj(obj[key],'.',newKey));
}
else{
flattened[newKey]=obj[key];
}
}
}
return flattened
}

## splice & slice

const arr = ['1', "hello", 20.3, 4];
const splicedArr = arr.splice(1,2);  
console.log(splicedArr);//['hello',20.3] //second index is included but in slice[o/p:'hello'] it won't include
console.log(arr); //['1',4] //modify the actual array but in slice it won't modify as it create shallow cpy

## Function

1. Normal function
   function fnNAme(arg1, arg2, ..., argN) {
   // write the logic here
   }
   IQ: can normal function hoisted? -> yes. the normal function declaration can be hoisted;
2. function expression - assigning a function into a varibale - const variableName = function(arg1, arg2, ...., argN) {
   // write the logic
   }
   IQ: can function expresiion hoisted? -> No, function expression can't be hoisted.
3. arrow function-> const multiplyNums = (a, b) => a \* b;

`Some more interesting facts about the functions`
-> Function behaves as an object

4. HOF (Higher Order Function): `take functions as a params and return the function.`
   Important built-in HOF of an array: 1. forEach() : used to trave array elements; 2. map() 3. filter() 4. reduce(): return you a single value iterating over the array of element based the function passed in it. 5. sort()
5. callback: `a callback is a function that is passed as an argument in an another function`

## flat

const nestedArr = [1,[2,3],4,[5,[6]]];
console.log(nestedArr.flat(Infinity));

## Lexical scope

Lexical scope is the definition area of an expression.
In other words, an item's lexical scope is the place in which the item got created.

Note:
Another name for lexical scope is static scope.
The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, `an item's definition space is its lexical scope.`

## Closure -- closure is a JS lexical scoping technique used to preserve the variables from a function's outer scope to its inner scope.

--> Application of closure:

1.  Infinite currying: it's splitting up the function that accepts the arguments/params
    into the several functions that only accept one parameter each.
2.  Javascript allows you to create private variables via closure.
    IQ: why currying is useful in JS?
    1. It helps us to create the HOF.
    2. For building modular resuasble code.
    3. It makes the code more readable.
    4. It helps us to avoid the same variable multiple times.

## Ways to create object in JS?

1. object literals {};
2. Object.create();
3. Function Constructor
4. class constructor using ES6 syntax

## Async and Await

async and await are features introduced in ES2017 (ES8) to handle asynchronous code in a more synchronous manner, making it easier to work with promises. async is used to define a function that returns a promise, while await is used to pause the execution of an async function until a promise is resolved or rejected, allowing asynchronous code to be written in a synchronous-like style.
