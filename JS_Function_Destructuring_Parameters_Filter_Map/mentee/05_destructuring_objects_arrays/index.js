// Task 1: Create an object with name and age
// Task 2: Destructure the object and log the values
// Task 3: Create an array with 3 items
// Task 4: Destructure the array and log the values
// const person = { name: "Aimee", age: 30 };
// const { name, age } = person;
// console.log(name, age);

const fruits = ["apple", "mango", "kiwi"];
const [val1, val2, val3] = fruits;
console.log(val1, val2, val3);

// --- 10 Practice Tasks ---
// Example 1: Destructure name and age from an object
const user = { name: "JayGetCheese", age: 900 };
const { name, age } = user;
console.log(name, age);

// Example 2: Destructure X and Y from an object
const math = { x: 10, y: 5 };
const { x, y } = math;
console.log(x, y);

// Example 3: Destructure values from an array
const arry = ["manny", "is", "a", "g"];
const [word1, word2, word3, word4] = arry;

console.log(word1, word2, word3, word4);

// Example 4: Destructure two fruit names from array
const fruit = ["kiwi", "pineapple", "strawberry"];
const [a, b, c] = fruit;
console.log(c);

// Example 5: Destructure job from info object
const info = { job: "SWE", salary: 140000 };
const { job } = info;
console.log(job);

// Example 6: Destructure boolean and language from array
const arr = [true, "JS"];
const [them1, language] = arr;
console.log(them1, language);

// Example 7: Destructure title from post object
const post = { title: "Code" };
const { title } = post;
console.log(title);
// Example 8: Destructure RGB values from array
const coolors = [
  "rgba(255, 105, 180, 0.7)",
  "rgb(0, 104, 139)",
  "rgb(50, 205, 50)",
];
const [pink, blue, green] = coolors;
console.log(pink, blue, green);

const rgb = [255, 105, 180];
const [e, d, f] = rgb;
console.log(e, d, f);

// Example 9: Destructure score and level from object
const game = { score: 12, level: 2 };
const { score, level } = game;
console.log(score, level);
// Example 10: Destructure enabled and theme from array
const config = [false, "darktheme"];
const [enabled, theme] = config;
console.log(enabled, theme);

// Extra Task:
// Destructure the first name and last name from an array called fullName
// Then log both values in a sentence like: "First: ___, Last: ___"
const fullName = ["Colby", "Capraun"];
const [first, last] = fullName;
console.log(`First: ${first}, Last: ${last}`);
