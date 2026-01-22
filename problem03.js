// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:

// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  const result = str === reversed;
  return result;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
