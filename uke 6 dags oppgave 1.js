// OPPGAVE 1

// A method is a function that is a property of an object, Methods are used to define behaviors or actions that objects can perform.

// Array.prototype.push() adds one or more elements to the end of an array and returns the new length of the array.
let fruits = ["apple", "banana"];
fruits.push("orange");

console.log(fruits);

//String.prototype.split() splits a string into an array of substrings based on a specified separator.
let sentence = "Hello world";
let words = sentence.split(" ");

console.log(words);

//Math.max() returns the largest of the zero or more numbers provided as input.
let maxValue = Math.max(10, 20, 30, 40);
console.log(maxValue);

//Date.prototype.getFullYear() returns the year of a specified date as a four-digit number.
let date = new Date("2001-09-11");
let year = date.getFullYear();
console.log(year);

//Object.prototype.hasOwnProperty() Returns a boolean indicating whether the object has the specified
// property as its own property
let person = { name: "Knut", age: 25 };
let hasAge = person.hasOwnProperty("age");
console.log(hasAge);

//OPPGAVE 2

//Use the function name followed by parentheses, including any arguments if needed
//Functions can be created using declarations, expressions, or arrow syntax
// let greeting = greet("Nils");
// console.log(greeting);
//Example of Calling a Function

//OPPGAVE 3
// function sayHello() {
//   console.log("Hello World");
// }

// const button = document.getElementById("helloButton");
// button.addEventListener("click", sayHello);

//OPPGAVE 4

function checkEvenOdd(value) {
  if (typeof value === "number") {
    return value % 2 === 0 ? "Even" : "Odd";
  } else {
    return "Error: The argument is not a number.";
  }
}

console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd("hello"));
console.log(checkEvenOdd([1, 2]));
