// 🟢 DOM Manipulation using getElementById

// Select the heading using its ID
const headingElement = document.getElementById("mainHeading");

// Select the paragraph using its ID
const paragraphElement = document.getElementById("mainParagraph");

// Select the button using its ID
const buttonElement = document.getElementById("mainButton");

// 🎨 Style the heading: make the text red
headingElement.style.color = "red";

// 🎨 Style the paragraph: change background and text color
paragraphElement.style.backgroundColor = "lightyellow";
paragraphElement.style.color = "blue";
paragraphElement.style.padding = "10px";

// 🎨 Style the button: give it a border and rounded corners
buttonElement.style.border = "2px solid black";
buttonElement.style.borderRadius = "8px";
buttonElement.style.padding = "10px 15px";
buttonElement.style.backgroundColor = "#f1c40f";
buttonElement.style.cursor = "pointer";

// 🧪 Optional: Add a little interaction
buttonElement.addEventListener("click", function () {
  headingElement.textContent = "You clicked the button!";
  headingElement.style.color = "green";
});
