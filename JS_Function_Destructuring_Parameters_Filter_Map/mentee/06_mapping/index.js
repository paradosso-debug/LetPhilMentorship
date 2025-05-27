// Task 1: Create an array of numbers
// Task 2: Use map to return a new array with each number doubled
// Task 3: Console log the new array

const numbers = [2, 4, 6];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);

// --- 10 Practice Tasks ---
// Example 1: Double each number in an array using map
const double = [3, 6, 9];
const numbered = double.map((n) => n * 2);
console.log(numbered);

// Example 2: Convert each word to uppercase using map
const animal = ["dog", "cat", "lizard"];
const capitol = animal.map(
  (animal) => animal.charAt(0).toUpperCase() + animal.slice(1)
);
console.log(capitol);

const word = ["Bird", "Bug", "Reptile"];
console.log(word.map((animals) => animals.toUpperCase()));

const word1 = ["Red", "green", "blue"];
const result1 = word1.map((color) => {
  if (color === "green") {
    return color.toUpperCase();
  }
  return color;
});
console.log(result1);

/*  
// easier to read.
  const result1 = word1.map((color)=>{
    
    switch(color)
    {
      case Red:
        
      ../
      break;
    }
      case green:
    {
      ../
      break;
    }
      case blue:
    {
      ../
      break;  
    }
  default: 
  
  break;
  }

*/

const str = "Dwightschrute";
const result = str.slice(0, 6) + str[6].toUpperCase() + str.slice(7);
console.log(result); //DwightSchrute

// Example 3: Add 1 to each number using
const alphanumeric = [1, 2, 3, 4];
const addition = alphanumeric.map((n) => n + 1);
console.log(addition);

// Example 4: Square each number in array using map
const myNumbers = [64, 36, 25];
const squared = myNumbers.map((x) => Math.sqrt(x));
console.log(squared);

// Example 5: Add exclamation mark to letters using map
const letters = ["a", "b", "c"];
console.log(letters.map((l) => `${l}!`));

// Example 6: Flip each boolean using map
const boolean = [true, false];
const flipped = boolean.map((b) => !b);
console.log(flipped);

// Example 7: Add 'yrs' to each age using map
const ages = [25, 68, 40];
console.log(ages.map((x) => `years: ${x + 4}`));

// Example 8: Get length of each name using map
const names = ["Colby", "Jocelin", "Jairo", "Daniel"];
const length = names.map((n) => n.length);
console.log(length);

// Example 9: Convert Celsius to Fahrenheit using map
const degrees = [20, 10, 0]; //celsius
const conversion = degrees.map((degrees) => {
  let converted = degrees * 1.8 + 32; // forumla for celsius to fahrenheit
  console.log("Fahrenheit:" + converted);
});

// Example 10: Prefix IDs with 'ID-' using map
const ids = [10, 20, 30];
console.log(ids.map((i) => `ID-${i}`));

const ids1 = [20, 40, 60];
const prefix = ids1.map((x) => "ID-" + x);
console.log(prefix);
