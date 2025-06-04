// TASK 1: Select the button and container
// TASK 2: Add a click event that triggers fetchCatFacts
// TASK 3: Create async function fetchCatFacts
// TASK 4: Use try...catch to handle errors
// TASK 5: Fetch from "https://catfact.ninja/facts?limit=5"
// TASK 6: Convert to JSON and loop through data.data
// TASK 7: Create a card for each fact and display the fact text
// TASK 8: Append the cards to the container

const loadUsersBtn = document.getElementById("loadUsersBtn");
const userContainer = document.getElementById("userContainer");

loadUsersBtn.addEventListener("click", fetchCatFacts);

async function fetchCatFacts() {
  try {
    userContainer.innerHTML = "";

    const response = await fetch("https://catfact.ninja/facts?limit=5");
    const data = await response.json();

    data.data.forEach((element) => {
      const div = document.createElement("div");
      div.className = "catBox";
      div.innerHTML = `
            <h3>Fact</h3>,
            <p>${element.fact}</p>
            `;
      userContainer.appendChild(div);
    });
  } catch (error) {
    console.error("no cats", error);
  }
}
