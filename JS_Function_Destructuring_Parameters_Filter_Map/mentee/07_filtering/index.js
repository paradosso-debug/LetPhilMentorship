// Task 1: Create an array of numbers
// Task 2: Use filter to return a new array with numbers greater than 5
// Task 3: Console log the new array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// nums.filter((num) => console.log(num > 5));
console.log(nums.filter((num) => num > 5));

// --- 10 Practice Tasks ---
// Example 1: Filter numbers greater than 2
const dos = [1, 5, 2, 7, 9, 4, 6];
console.log(dos.filter((doss) => doss > 2));

const dos1 = [1, 1, 2, 5, 8];
const filtered = dos1.filter((filter) => filter > 2);
console.log(filtered);

// Example 2: Filter words longer than 3 letters

const words = ["at", "we", "wet", "otter", "mashed", "yes"];
const threeWords = words.filter((three) => three.length > 3);
console.log(threeWords);

// Example 3: Keep only true values from a boolean array
const values = [true, false, true, true, false];
console.log(values.filter((val) => !val));

// Example 4: Remove zero from list
const numbers = [0, 1, 2, 4, 0, 5, 0, 6, 0, 10];
console.log(numbers.filter((number) => number !== 0));

// Example 5: Filter ages 18 or older
const age = [20, 30, 40, 18, 12, 5, 22];
console.log(age.filter((younger) => younger > 18));
//nuggets
// Example 6: Keep temperatures less than 30
const temperatures = [10, 15, 20, 30, 45, 55, 70];
console.log(temperatures.filter((temp) => temp < 30));

// Example 7: Remove 'b' from character array
// const removeb = ["bogger", "bat", "blog", "gmaer", "coderBoy"];
// const bremoved = removeb.filter((b) => b.splice(1,0) "b");
// console.log(bremoved);

// const removeb = ["a", "b", "c", "d"];
// const bremoved = removeb.filter((b) => b !== "b");
// console.log(bremoved);

const removeb = ["bogger", "bat", "blog", "gamer", "coderBoy"];
console.log(removeb.filter((b) => !b.toLowerCase().includes("b")));

// Example 8: Keep IDs greater than 100
const realID = [100, 150, 5, 4, 8, 250, 30, 2];
console.log(realID.filter((fakeID) => fakeID > 100));
//Boom -bam
// Example 9: Remove empty strings
const string = ["a", "b", "", "d", ""];
console.log(string.filter((empty) => empty !== ""));
// Example 10: Keep only even numbers

const num_values = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num_values.filter((num) => num % 2 == 0));
