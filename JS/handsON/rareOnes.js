//--------------------------------------------------------------------------------------------------

// Implement the function dataFinder such that :
// 1. it takes a single argument data , an array of integers
// 2. it returns a new function that called find.
// a) find takes 3 arguments:minRange(integer), maxRange(integer) and value(integer). it performs the following
// -> it searches for the value in the data array in the inclusive range(minRange, maxRange) using 0-based indexing. if value is found in the given range it returns true.Otherwise it returns false
// -> if minRange or maxRange is beyond an end of the array.throws an error Object with the message of 'Invalis range'
function dataFinder(data) {
  return function find(minRange, maxRange, value) {
    if (minRange < 0 || maxRange >= data.length) {
      throw new Error("Invalid range");
    }

    for (let i = minRange; i <= maxRange; i++) {
      if (data[i] === value) {
        return true;
      }
    }
    return false;
  };
}

// Example usage:
const findInData = dataFinder([1, 2, 3, 4, 5]);

try {
  console.log(findInData(1, 3, 3)); // Output: true
  console.log(findInData(0, 2, 6)); // Output: false
  console.log(findInData(-1, 3, 3)); // Throws error: Invalid range
} catch (error) {
  console.error(error.message);
}

//--------------------------------------------------------------------------------------------------
// In this challenge you are provided with the implementation of a simple counter Object

// const counter = (function counter() {
//   let value = 0;
//   return {
//     getValue: function () {
//       return value;
//     },
//     changeBy: function (k) {
//       value += k;
//     },
//   };
// })();

// your task is to implement a function stepCounter that:
// 1. takes a single parametr k
// 2. returns a new object, representing a step counter with the initial value of 0 and with three methods
// a) increment(): increments the current value by k
// b) decrement(): decrements the current value by k
// c) getValue(): returns the current value
//your implementation must encapsulate the provided cuounter object and use it for its implementation. The object returned by stepCounter must not have a changeBy property
function stepCounter(k) {
  const counter = (function () {
    let value = 0;
    return {
      increment: function () {
        value += k;
      },
      decrement: function () {
        value -= k;
      },
      getValue: function () {
        return value;
      },
    };
  })();

  return {
    increment: function () {
      counter.increment();
    },
    decrement: function () {
      counter.decrement();
    },
    getValue: function () {
      return counter.getValue();
    },
  };
}

// Example usage:
const counter = stepCounter(2); // Initialize a step counter with step size of 2
counter.increment(); // Increment by 2
console.log(counter.getValue()); // Output: 2
counter.increment(); // Increment by 2 again
console.log(counter.getValue()); // Output: 4
counter.decrement(); // Decrement by 2
console.log(counter.getValue()); // Output: 2
