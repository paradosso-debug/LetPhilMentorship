// Task 1: Create a function that accepts a name parameter
// Task 2: Console log a message that includes the name
function includesName(name) {
  console.log(`function must return a name: ${name}`);
}
includesName("Dan");
// Task 3: Call the function and pass different names

function greetUser(name) {
  console.log(`Hello, ${name}`);
}

greetUser("Aimee");
greetUser("Bob");

// --- 10 Practice Tasks ---
// Example 1: Function accepts a name and logs it
function userName(name) {
  console.log(`Name: ${name}`);
}
userName("Colby");
// Example 2: Function welcomes a user by name
// Example 3: Function checks and logs age

const ageCheck = (age) => {
  console.log(`Users age is ${age}`);
};
ageCheck(25);

// Example 4: Function logs a favorite color
const favColor = (color) => {
  console.log(`My fave color is ${color}`);
};
favColor("green");
//
// Example 5: Function says bye to a user
function says(user) {
  console.log(`Bye,${user}`);
}
says("Bobby");

// Example 6: Function doubles a number
const double = (num) => {
  return `${num * 2}`;
};
double(2);

// Example 7: Function squares a number
const squared = (num) => {
  const sum = num ** 2;
  console.log(sum);
};
squared(10);

// Example 8: Function greets with full name
const greet = (first, last) => {
  return `Welcome ${first} ${last}`;
};
greet("Jay", "GetMoney");

// Example 9: Function reminds of a task
const alertTask = (task) => {
  return alert(task);
};
alertTask("Go to the Store");
// Example 10: Function logs today’s temperature
const temp = (temp) => {
  return `Todays temp is ${temp}`;
};
console.log(temp(80));

function weatherToday(temp) {
  console.log(`It is ${temp}`);
}
