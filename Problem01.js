// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:

// Input: "hello"
// Output: "olleh"

function reverseString(str) {
  return str.split("").reverse().join("");
}
const result = reverseString("hello");
console.log(result);
