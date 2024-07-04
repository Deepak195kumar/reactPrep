function reverseString(str) {
  return str.split("").reverse().join("");
}

function largestNumber(arr) {
  return Math.max(...arr);
}

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function flattenArray(arr) {
  return arr.flat(Infinity);
}

function findIndex(arr, element) {
  return arr.indexOf(element);
}

function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function mergeSortedArrays(arr1, arr2) {
  let merged = [],
    i = 0,
    j = 0;

  // While there are elements in both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add any remaining elements from arr1
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// find duplicate elements in array
const arrNum = [1, 2, 8, 2, 9, 8];
const dup = arrNum.filter((ele, ind, arr) => arr.indexOf(ele) !== ind);
console.log(dup); // return an array which contains duplicate elements -- [2,8]

// find max/min in a given array
Math.min(1, 2, 3); // 1

Math.min(arrNum); // NaN   //That is because Math.min or Math.max functions expect distinct variables and not an array.so we can use spread operator and destructure here
console.log(Math.min(...arrNum)); //1
console.log(Math.max(...arrNum)); //9

// we can do it by using reducer function as well --for min
const ans = arrNum.reduce((prev, curr) => {
  return prev > curr ? curr : prev;
});
console.log(ans);
