// -------------------------------
// Selecting Elements in the DOM
// -------------------------------

// 1️ Selecting an element by ID using getElementById
// This selects the element with the specific ID 'heading'
const headingElement = document.getElementById("heading");
console.log("getElementById:", headingElement);

// 2 Selecting elements by class using getElementsByClassName
// This returns a collection of all elements with the class 'myClass'
const classElements = document.getElementsByClassName("myClass");
console.log("getElementsByClassName:", classElements);

// 3 Selecting elements by tag name using getElementsByTagName
// This returns a collection of all <div> elements in the page
const divElements = document.getElementsByTagName("div");
console.log("getElementsByTagName:", divElements);

// 4 Selecting a single element using querySelector
// This selects the first <li> element inside the <ul>
const firstLi = document.querySelector("ul li");
console.log("querySelector (first li):", firstLi);

// 5 Selecting all matching elements using querySelectorAll
// This returns a NodeList of all <li> elements inside the <ul>
const allLis = document.querySelectorAll("ul li");
console.log("querySelectorAll (all li):", allLis);

// 8 Looping through the NodeList to log each li text content
allLis.forEach(function (li, index) {
  console.log("Item", index + 1, ":", li.textContent);
});


// CSS

// Make heading red
headingElement.style.color = "red";

// Make all class elements italic
for (let i = 0; i < classElements.length; i++) {
  classElements[i].style.fontStyle = "italic";
}

// Give divs a light blue background
for (let i = 0; i < divElements.length; i++) {
  divElements[i].style.backgroundColor = "#dff9fb";
}

// Make the first li bold
firstLi.style.fontWeight = "bold";

// Give all list items a dotted border
allLis.forEach(function (li) {
  li.style.border = "1px dotted gray";
  li.style.padding = "5px";
  li.style.marginBottom = "5px";
});
