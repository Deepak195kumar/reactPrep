function areAnagrams(str1, str2) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanString = (str) => str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Sort the characters of the string
  const sortedString = (str) => cleanString(str).split("").sort().join("");

  // Compare the sorted versions of the strings
  return sortedString(str1) === sortedString(str2);
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
console.log(areAnagrams("Astronomer", "Moon starer")); // true
console.log(areAnagrams("School master", "The classroom")); // true

// calculate ethe frequency of the characters in a string
const characterFrequency = (str) => {
  const res = {};
  for (let i = 0; i < str.length; i++) {
    if (res.hasOwnProperty(str[i])) res[str[i]] += 1;
    else res[str[i]] = 1;
  }
  return res;
};

console.log(characterFrequency("Deepakd"));

// function characterFrequency(str) {
//   const frequency = {};
//   for (let char of str) {
//     if (char in frequency) {
//       frequency[char]++;
//     } else {
//       frequency[char] = 1;
//     }
//   }
//   return frequency;
// }

// find duplicate elements in array
const arrNum = [1, 2, 8, 2, 9, 8];
const dup = arrNum.filter((ele, ind, arr) => arr.indexOf(ele) !== ind);
console.log(dup); // return an array which contains duplicate elements -- [2,8]

var inputArray = [8, 4, 2, 3, 1, 5, 0, 3, 1, 6, 3, 7, 7]; // remove duplicates and sort them in ascending order
let res = [...new Set(inputArray)].sort(); // [0, 1, 2, 3, 4, 5, 6, 7, 8]

// Init Cap

const str = "hi i am deepak";

const arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}
console.log(arr.join(" "));
