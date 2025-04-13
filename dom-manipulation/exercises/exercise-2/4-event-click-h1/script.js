// Select button by class using querySelector - first match
const button = document.querySelector(".click-btn");

// Select h1 element using querySelector for tag - first match
const heading = document.querySelector("h1");

// When button is clicked, change h1 content
button.addEventListener("click", function () {
  heading.innerHTML = "Button Clicked!";
});
