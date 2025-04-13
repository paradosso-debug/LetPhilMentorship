// Select elements using tag names
const elements = document.getElementsByTagName("p"); // All <p> elements
const buttons = document.getElementsByTagName("button"); // All <button> elements

// Select the first paragraph and the two buttons
const counterDisplay = elements[0];
const increaseBtn = buttons[0];
const decreaseBtn = buttons[1];

// Counter logic
let count = 0;

increaseBtn.addEventListener("click", function () {
  count++;
  counterDisplay.textContent = count;
});

decreaseBtn.addEventListener("click", function () {
  count--;
  counterDisplay.textContent = count;
});
