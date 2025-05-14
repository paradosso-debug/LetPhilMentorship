// Task 1: Declare a function using the function keyword
// Task 2: Declare a function using an arrow function
// Task 3: Console log different messages inside each function

function sayHi() {
  console.log("Traditional function");
}

sayHi();

const sayHello = () => {
  console.log("Arrow function");
};

sayHello();

// --- 10 Practice Tasks ---
// Example 1: Create a traditional function that logs a message
function logMessage() {
  console.log("Message!!");
}
logMessage();
// Example 2: Create an arrow function that logs a message
const arrowFunction = () => {
  console.log("The New way");
};
arrowFunction();

// Example 3: Create a function that adds two numbers
const addTwoNums = () => {
  let num1 = 5;
  let num2 = 10;
  console.log(num1 + num2);
};
addTwoNums();

const addTwoNumbers = (numA, numB) => {
  return numA + numB;
};
console.log(addTwoNumbers(2, 3));

// Example 4: Create an arrow function that multiplies two numbers
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(5, 5));
// Example 5: Create a function that squares a number
function square(x) {
  return x * x;
}

console.log(square(2, 2));

// Example 6: Create an arrow function that divides two numbers
const divideNums = (num1, num2) => {
  const sum = num1 / num2;
  console.log(sum);
};
divideNums(10, 2);
// Example 7: Create a function that logs the current date
function date() {
  let newDate = new Date();
}
date();
// Example 8: Create an arrow function that shouts
const shout = () => {
  console.log("RAAAAAAAAAHHHHHH");
};
shout();
// Example 9: Create a function that whispers
function whisper() {
  console.log("speaking in my little voice");
}
whisper();
// Example 10: Create an arrow function that returns a random number
let random = () => {
  return Math.floor(Math.random() * 10) + 1;
};

// random(:) );
console.log(random());
