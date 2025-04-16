//  DOM Manipulation using getElementById
const mainHead = document.getElementById("mainhead");
const paragraph = document.getElementById("paragraph");
const btn = document.getElementById("button");
// Select the heading using its ID - headingElement

// Select the paragraph using its ID - paragraphElement

// Select the button using its ID - buttonElement

//  Style the heading: make the text red using style.color
mainHead.style.color = "green";

//  Style the paragraph: change background and text color using style.backgroundColor
// style.color
// syle.padding
paragraph.style.color = "white";
paragraph.style.backgroundColor = "black";
paragraph.style.padding = "20px";

const setColor = (color) => {
  mainHead.style.color = color;
};

mainHead.addEventListener("mouseover", () => setColor("red"));
mainHead.addEventListener("mouseout", () => setColor("black"));

// Style the button: give it a border and rounded corners
// style.border
// style.borderRadius
// style.padding
// style.backgroundColor #f1c40f
// sytle.cursor

btn.style.border = "1px soild black";
btn.style.borderRadius = "5px";
btn.style.padding = "10px";
btn.style.backgroundColor = " #f1c40f";
btn.style.cursor = "pointer";

// Add a little interaction using addEventListener to the buttonElement
// headingElement.textContent
// headingElement.style.color
btn.addEventListener("click", () => {
  mainHead.textContent = "Hello Jocelin!";
  mainHead.style.color = "#FFC5D3";
});
