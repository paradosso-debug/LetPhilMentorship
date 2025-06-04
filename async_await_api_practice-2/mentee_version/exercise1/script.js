// TASK 1: Select the button with id "loadUsersBtn" and the container with id "userContainer"
// TASK 2: Add a click event listener to the button that calls a function named fetchUsers
// TASK 3: Create an async function called fetchUsers
// TASK 4: Inside the function, use try...catch to handle errors
// TASK 5: Clear the container using innerHTML
// TASK 6: Fetch data from "https://randomuser.me/api/?results=5"
// TASK 7: Convert the response to JSON
// TASK 8: Loop through data.results and create a div with class "user-card" for each user
// TASK 9: Display user image, full name, and email inside the card
// TASK 10: Append each card to the container

const loadBtnUser = document.getElementById("loadUsersBtn");
const userContainer = document.getElementById("userContainer");

loadBtnUser.addEventListener("click", fetchUsers);

async function fetchUsers() {
  try {
    userContainer.innerHTML = "";

    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    const users = data.results;

    users.forEach((user) => {
      const div = document.createElement("div");
      div.className = "user-card";
      div.innerHTML = `<img src="${user.picture.medium}" alt="user image"/>,
        <h3>Name: ${user.name.first} ${user.name.last}</h3>,
        <p>Email: ${user.email}</p>
        `;
      userContainer.appendChild(div);
    });
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}
console.log("chicken");
