// Select button by class using querySelector - first match - button
const clickerBtn = document.querySelector(".click-btn");
const head = document.querySelectorAll("h1")[4];
// Select h1 element using querySelector for tag - first match - heading

const h1Changed = (head.textContent = "changed");
h1Changed.innerHTML = "<h4> different </h4>";
console.log(h1Changed);
// When button is clicked, change h1 content
clickerBtn.addEventListener("click", () => {
  head.innerHTML = "<h1>this is bolded</h1>";
});

//const div = document.getElementById("myDiv");
// div.innerHTML = "<strong>Hello</strong> World";
