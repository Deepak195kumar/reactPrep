In JavaScript, understanding the execution context and the event loop is crucial for mastering how the language handles asynchronous operations and execution flow. Here's an in-depth explanation of both concepts:

# Execution Context

The execution context is the environment within which JavaScript code is executed. It consists of:

# Global Execution Context (GEC):

Created when the JavaScript engine starts executing your script.
Contains global objects (like window in browsers), global variables, and functions.

# Function Execution Context (FEC):

Created whenever a function is invoked.
Each function has its own execution context which contains:
Variable Object (VO): Contains function arguments, inner variable declarations, and function declarations.
Scope Chain: Consists of the current function's Variable Object plus the Variable Object of its parent contexts.
This Binding: Refers to the object that is currently executing the code.

# Execution Stack:

Also known as the "call stack," it keeps track of execution contexts in a Last In, First Out (LIFO) order.
When a function is called, its execution context is pushed onto the stack. When the function completes, its context is popped off the stack.

`Phases of Execution Context Creation`

# 1.Creation Phase:

`Global Context:`
Creates the global object.
Sets up the this value to point to the global object.
Hoists functions and variables.

`Function Context:`
Sets up the argument object.
Creates the scope chain.
Hoists local variables and functions.

# 2.Execution Phase:

Assigns values to variables.
Executes the code line by line.

```var x = 10;

function foo() {
  var y = 20;
  console.log(x + y);
}

foo();
```

`Global Execution Context:`
x is hoisted.
foo function is hoisted.
`Function Execution Context for foo:`
y is hoisted.
Executes console.log(x + y).

# Event Loop

The event loop is a fundamental part of JavaScript's concurrency model, enabling asynchronous programming.

`1.Call Stack:` - LIFO

The data structure that keeps track of function calls.
Functions are pushed onto the stack when they are called and popped off when they return.

`2.Web APIs:`

Browser-provided APIs (like setTimeout, DOM events, fetch, etc.).
They handle asynchronous operations.

`3.Callback Queue:` - FIFO

A queue where callback functions are held until the call stack is empty.
Examples of callbacks include functions passed to setTimeout, click event listeners, etc.

`4.Event Loop:`

Continuously checks the call stack and the callback queue.
If the call stack is empty, it pushes the first callback from the queue to the call stack for execution.

```console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 1000);

console.log('End');
```

# Execution Flow:

`Global Execution Context:`
Executes console.log('Start') and prints "Start".
Encounters setTimeout and sets up a timer in Web APIs.
Executes console.log('End') and prints "End".

`After 1000ms:`
The timer expires, and the callback is moved to the callback queue.

`Event Loop:`
Checks if the call stack is empty (which it is).
Moves the timeout callback to the call stack and executes it, printing "Timeout callback".
