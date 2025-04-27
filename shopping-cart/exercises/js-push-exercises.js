let fruits = [];
fruits.push("Apple");
fruits.push("Kiwi", "Mango");
console.log(fruits);
// ========================================
// Exercise 1: Basic `push()` method
// ========================================

// STEP 1: Create an empty array named "cars".
let cars = [];
// STEP 2: Create an array named "carsToPush" containing car brand names.
let carsToPush = ["Toyota", "BMW", "Ford"];
// STEP 3: Add all elements from "carsToPush" into the "cars" array using `push()`.

cars.push(...carsToPush);
// STEP 4: Log the updated contents of the "cars" array.
console.log(cars);
// ========================================
// Exercise 2: Adding Multiple Elements with `push()`
// ========================================

// STEP 1: Create an array named "cities" with two city names.
let cities = ["London", "Seoul"];
// STEP 2: Add three more city names directly into the "cities" array using `push()`.
cities.push("Paris", "Madrid", "Milan");
// STEP 3: Log the updated contents of the "cities" array.
console.log(cities);
// ========================================
// Exercise 3: Pushing Elements Using a Loop
// ========================================

// STEP 1: Create an empty array named "numbers".
let numbers = [];
// STEP 2: Use a loop to push numbers 1 through 5 into the "numbers" array.
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
// STEP 3: Log the contents of the "numbers" array.
console.log(numbers);
// ========================================
// Exercise 4: Pushing Objects into an Array
// ========================================

// STEP 1: Create an empty array named "students".
let students = [];
// STEP 2: Define two objects named "alice" and "bob", each containing name and age properties.
let alice = { name: "Alice", age: 30 };
let bob = { name: "Bob", age: 15 };
// STEP 3: Add both objects ("alice" and "bob") to the "students" array using `push()`.
students.push(alice, bob);
// STEP 4: Log the contents of the "students" array.
console.log(students);
// ========================================
// Exercise 5: Pushing Arrays into an Array (Nested Arrays)
// ========================================

// STEP 1: Create an empty array named "nestedArray".
let nestedArray = [];
// STEP 2: Define three separate arrays named "arr1", "arr2", and "arr3".
let numbersArr = [3674, 388, 73482];
let stringArr = ["hello", "world", "javascript"];
let booleanArr = [true, false, false];
// STEP 3: Add all three arrays ("arr1", "arr2", and "arr3") into the "nestedArray" using `push()`.
nestedArray.push(numbersArr, stringArr, booleanArr);
// STEP 4: Log the contents of the "nestedArray".
console.log(nestedArray);
// ========================================
// Exercise 6: Using Conditional Statements with `push()`
// ========================================

// STEP 1: Create an empty array named "evenNumbers".
let evenNumbers = [];
// STEP 2: Create a function named "isEven" that determines if a number is even.
function isEven(number) {
  return number % 2 === 0;
}
// STEP 3: Use a loop from 1 to 10, and push only even numbers into the "evenNumbers" array.
for (let i = 1; i <= 10; i++) {
  if (isEven(i)) {
    evenNumbers.push(i);
  }
}
// STEP 4: Log the contents of the "evenNumbers" array.
console.log(evenNumbers);
// ========================================
// Exercise 7: Merging Arrays Using `push()`
// ========================================

// STEP 1: Create two arrays named "array1" and "array2".
let arr1 = ["Joel", "Duck", 5];
let arr2 = ["Pen", "Notebook", 7.3];
// STEP 2: Use `push()` with the spread operator to add all elements from "array2" into "array1".
arr1.push(...arr2);
// STEP 3: Log the contents of the merged "array1".
console.log(arr1);
// ========================================
// Exercise 8: Using `push()` with User Input
// ========================================

// STEP 1: Create an empty array named "userInputs".
let userInputs = [];
// STEP 2: Dynamically create and append three input fields to the document body.
for (let i = 0; i <= 2; i++) {
  const input = document.createElement("input");
  document.body.appendChild(input);
}
// STEP 3: Create a button that the user can click to submit inputs.
const button = document.createElement("button");
button.textContent = "Submit Inputs";

button.addEventListener("click", function () {
  const allInputs = document.querySelectorAll("input");
  for (let i = 0; i < allInputs.length; i++) {
    console.log(allInputs[i]);
    userInputs.push(allInputs[i].value);
  }
  console.log(userInputs);
});

document.body.appendChild(button);
// STEP 4: Add an event listener to the button:
//   - When clicked, retrieve values from all input fields.
//   - Push those values into the "userInputs" array.

// STEP 5: Log the contents of the "userInputs" array.
// STEP 6: Append the button to the document body so the user can see and interact with it.
