// VARIABLES & DATA TYPES

// Exercise 1: Declare and log a string -- My name is & name...Then print the result

// let greet = "Hi my name is Manny"; 
// console.log(greet); 
 let myName = "Jocelin"
 console.log("My name is " + myName);


 // Exercise 2: Declare and log a number -- I am & age & years old, then print the result
let num = 23;
let name = "colby";

console.log("My name is " + name + " and my age is " + num);

// Exercise 3: Declare and log a boolean -- Am I happy? & boolean, then print the result
let isSick = true;
console.log("Is Juno sick? " + isSick);

let isWizard = false;
console.log("Am I not a wizard? " + isWizard);

// SYNTAX EXPLANATIONS:
// () parentheses: used to pass values to functions like console.log()
// "" double quotes: wrap strings (text values)
// ; semicolon: ends a statement


// CONDITIONALS

// Exercise 1: Check if temperature is hot by declaring a variable and using the if statement, and print the result
let temp = 30
if (temp < 29) {
  console.log("is not hot")
} else {
  console.log("is hot")
}


// Exercise 2: Grade checker A,B,C - declare a variable and use and if else statement then print the result 
let grade = 60
if (grade >= 90){
  console.log("Grade A")
} else if (grade >= 80){
  console.log ("Grade B")
} else {
  console.log("Grade C or lower")
};

// Exercise 3: Raining check - Check if its raining if true take an umbrella else enjoy the sunshine. Declare a variable and use the if else statement, then print the result
let isRaining = false;

if (isRaining){
  console.log("Here's an umbrella")
} else {
  console.log("Enjoy the Sunshine!")
};

// Colby's real height
let height = 5;

if (height <= 3) {
  console.log("Go away kid")
} else {
  console.log("I guess so")
}

// SYNTAX EXPLANATIONS:
// if: checks if something is true
// else if: checks another condition if the first is false
// else: runs if all previous conditions are false
// ===: checks for exact equality
// {} curly brackets: contain the code that runs if the condition is true


// LOOPS

// Exercise 1: Print numbers 1 to 5 using a for loop, then print the result
for (let i = 1; i<=5; i++){
  console.log(i);
};
  
  // Exercise 2: Print even numbers from 1 to 10, then print the result 
  for (let i = 1; i <= 10; i++){
    if (i % 2 === 0){
      console.log(i)
    }
  };

  // Exercise 3: Countdown using while loop, then print the result
 let count = 3;
 while (count >= 0) {
  console.log("counting down from :" + count);
  count--;
 } 
    
  // SYNTAX EXPLANATIONS:
  // for: loop that repeats a block of code a specific number of times
  // while: loop that repeats as long as the condition is true
  // i++: shortcut for i = i + 1
  // %: modulus (remainder)
  

  // ARRAYS

// Exercise 1: Create and log an array of fruits, then print the result
 const fruits = ['Bananas', 'Cherry', 'Apple', 'Guava', 'Kiwi'];

 console.log(fruits);

// Exercise 2: Access and print a specific item in an array from the previous block of code, and print the result
console.log(fruits[3]);

// Exercise 3: Loop through an array and log each item, from the previous fruit code and print the result
for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
};

// SYNTAX EXPLANATIONS:
// [] square brackets: used to define an array or access elements by index
// .length: gives the number of items in the array


// FUNCTIONS

// Exercise 1: Create and call a function with no parameters and print the result
  function greet () {
    console.log("hello")
  }
  greet(); 

  
  // Exercise 2: Function with one parameter - declare function name as greetPerson, then print Hello plus name 
 

 function greetPerson(name) {
  console.log("Hello " + name);
 }
 greetPerson();


  // Exercise 3: Function that returns a value - add two numbers and print the result 
  function addSum(a, b){
    console.log(a+b);
    // return a + b; 
  };

  addSum(3, 5);  
  
  // SYNTAX EXPLANATIONS:
  // function: declares a function
  // (): parentheses hold parameters or arguments
  // {}: curly braces hold the code that runs when the function is called
  // return: gives a result back from the function
  

  // ARROW FUNCTIONS

// Exercise 1: Arrow function with no parameters - Declare a function with the name sayHi and print the result
const sayHi = () => {
  console.log("Hi");
}
sayHi();

  // Exercise 2: Arrow function with one parameter - Declare a function with the name greetuser and print Hello plus the parameter.
  const greetUser = (name) => {
    console.log("hello" + name)
  }
 greetUser(" jocelin"); 
  // Exercise 3: Arrow function that returns a value - Use multiplication and print the result

  const multiply = (a, b) => a * b;

  console.log(multiply(5,2));
  
  // SYNTAX EXPLANATIONS:
  // => arrow function syntax (shortcut for writing functions)
  // const: used to store the function in a variable that doesn't change
  // (): parentheses hold parameters
  // {}: curly braces contain the function's logic
  // {
  //   name: "manny", 
  //   age: 25;
  //   key: "value"
  // }

  const square = (num) => num**2;
  console.log(square(5));
  // Math.sqrt
  // Math.PI
  // Math.E
  // math.max