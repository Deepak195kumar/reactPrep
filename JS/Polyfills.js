//Polyfill of call
Function.prototype.myCall = function (scope, ...args) {
  //this line spread will be not there for apply
  scope._this = this; // this keyword holds the currently executing function
  return scope._this(...args);
};

//Polyfill of apply
Function.prototype.myCall = function (scope, args) {
  //this line spread will be not there for apply
  scope._this = this;
  return scope._this(...args);
};

//Polyfill of bind
Function.prototype.myBind = function (scope, ...args) {
  scope._this = this;
  return function () {
    return scope._this(...args);
  };
};

//Flattening an obj
function flattenedObj(obj, del = "", parentKey = "") {
  const flattened = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey ? `${parentKey}${del}${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null)
        Object.assign(flattened, flattenedObj(obj[key], ".", newKey));
      else flattened[newKey] = obj[key];
    }
  }
  return flattened;
}

//Polyfill for map
Array.prototype.myMap = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    let obj = cb(this[i]);
    arr.push[obj];
  }
  return arr;
};
const amppedValue = objArr.myMap((item) => item.name);

//Polyfill for filter
Array.prototype.myFilter = function (cb) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) arr.push[this[i]];
  }
  return arr;
};
const filteredData = objArr.myFilter((item) => item.price > 5000);

//Polyfill for reduce
Array.prototype.myReduce = function (cb, initialVal) {
  let acc = initialVal ? initialVal : this[0];
  let strtIdx = initialVal ? 0 : 1;
  for (let i = strtIdx; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }
  return acc;
};

const sum = (acc, elem) => {
  return acc + elem; // acc -> first array element
};
const sumVal2 = elems.myReduce(sum);

//Polyfill for flatten array

Array.prototype.myFlat = function (depth = 1) {
  let flattened = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth > 0) {
      flattened = flattened.concat(this[i].myFlat(depth - 1));
    } else flattened.push(this[i]);
  }
  return flattened;
};
const res = arr.myFlat(4); //works with shallow cpy won't modify original arr

//Infinite currying
function sum(a) {
  // The inner function that continues currying
  function curriedSum(b) {
    // If no argument is provided, return the accumulated sum
    if (b === undefined) {
      return a;
    }
    // Otherwise, add the current argument to the accumulated sum
    a += b;
    return curriedSum;
  }
  return curriedSum;
}

// Usage
console.log(sum(1)(2)(3)(4)()); // Outputs: 10

//Memoize
const memoize = (fn) => {
  let cache = {};

  return function (n) {
    if (cache[n]) {
      // '', undefined, false, 0
      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const memoisedFunc = memoize(calc);

//Polyfill of promise
/**
 *   Write the polyfill of promise APIs or can create your own custom Promise APIs.
 */

const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejeceted";

function CustomPromise(exectorFn) {
  let state = "pending";
  let value = undefined;

  const scbArr = [];
  const fcbArr = [];
  const finallyArr = [];

  const resolve = (val) => {
    if (state !== PENDING) return;
    state = RESOLVED;
    value = val;
    scbArr.forEach((scb) => {
      scb(value);
    });
    excuteFinallyCallbacks();
  };

  const reject = (err) => {
    if (state !== PENDING) return;
    state = REJECTED;
    value = err;
    fcbArr.forEach((fcb) => {
      fcb(value);
    });

    excuteFinallyCallbacks();
  };

  const excuteFinallyCallbacks = () => {
    finallyArr.forEach((cb) => {
      cb();
    });
  };

  this.then = function (cb) {
    if (state === RESOLVED) {
      cb(value);
    } else {
      scbArr.push(cb);
    }

    return this;
  };

  this.catch = function (cb) {
    if (state === REJECTED) {
      cb(value);
    } else {
      fcbArr.push(cb);
    }
    return this;
  };
  this.finally = function (cb) {
    // Please do it this as HW
    if (state === RESOLVED || state === REJECTED) {
      cb();
    } else {
      finallyArr.push(cb);
    }
    return this;
  };

  exectorFn(resolve, reject);
}

const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    //const data = {name: 'Ashwani Rajput', designation: 'Engineering Manager'};
    const data = null;
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Data can not be fetched!!!"));
    }
  }, 2000);
});

promise
  .then((res) => {
    // if you want to chaining what shoudl you do? please correct the code accordingly.
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Data fetching has been done succesfully!!");
  });

// DEEP COPY
/**
 * Performs a deep copy of an object or array.
 *
 * @param {Object|Array} obj - The object or array to be copied.
 * @returns {Object|Array} - A deep copy of the input object or array.
 *
 * @throws Will throw an error if the input is not an object or array.
 *
 * @example
 * const originalObj = { name: 'John', age: 30, hobbies: ['reading', 'painting'] };
 * const copiedObj = deepCopy(originalObj);
 * console.log(copiedObj); // { name: 'John', age: 30, hobbies: ['reading', 'painting'] }
 *
 * @example
 * const originalArr = [1, 2, 3, { name: 'John', age: 30 }];
 * const copiedArr = deepCopy(originalArr);
 * console.log(copiedArr); // [1, 2, 3, { name: 'John', age: 30 }]
 */

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }
  return copy;
}

const original = { a: 1, b: { c: 2 } };
const deepCopy = deepClone(original);

console.log(deepCopy); // { a: 1, b: { c: 2 } }
deepCopy.b.c = 3;
console.log(original.b.c); // 2, because `b` is not a reference

function createCounter() {
  let count = 0; // This is the private variable

  return function () {
    count += 1;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // Outputs: 1
console.log(counter1()); // Outputs: 2
console.log(counter2()); // Outputs: 1
console.log(counter2()); // Outputs: 2
console.log(counter1()); // Outputs: 3
