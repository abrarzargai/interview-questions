// ## Reference url :- https://www.interviewbit.com/javascript-interview-questions/

// ## https://www.toptal.com/javascript/interview-questions

// #

// 1. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

var splitString = string.split("");
var reversedString = splitString.reverse();
reversedString = reversedString.join("");
if (string == reversedString) {
  console.log("string is Palindrome");
} else {
  console.log("string is not Palindrome");
}

// 2. Implement a function that flattens a nested array in JavaScript, converting it into a single-level array.

let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
let flatArray = nestedArray.flat(2);

// 3. Write a function that determines if two strings are anagrams of each other

// 4. Create a JavaScript function that returns the Fibonacci sequence up to a given number, utilizing memoization for optimized performance.

// 5. Implement a function to reverse a string without using the built-in reverse() method.

// 6. Given an array of numbers, write a function to find the largest and smallest numbers in the array.

// 7. Given a string, write a function to count the occurrences of each character in the string.

// 8. Write a function that reverses the order of words in a sentence without using the built-in reverse() method.

// 9. Implement a function that checks if a given string is a palindrome (reads the same forwards and backwards) while ignoring whitespace and punctuation.

// 10. Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.

// 11. Implement a function that removes duplicates from an array, keeping only the unique elements.

// 12. Write a function that accepts a number and returns its factorial (e.g., factorial of 5 is 5 x 4 x 3 x 2 x 1).

// 13. Implement a function that flattens a nested array into a single-dimensional array.



// ## Hacker rank Question and Answer

// 17. Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly
// four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example: arr = [1, 3, 5, 7, 9];
//  The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9=24 . The function prints

function miniMaxSum(arr) {
  arr.sort();
  let min = arr
    .slice(0, arr.length - 1)
    .reduce((partialSum, a) => partialSum + a, 0);
  let max = arr
    .slice(1, arr.length)
    .reduce((partialSum, a) => partialSum + a, 0);
  console.log(min + " " + max);
}
