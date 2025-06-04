// TASK 1: Select the button and container
// TASK 2: Add a click event listener that calls fetchDogs
// TASK 3: Create an async function fetchDogs with try...catch
// TASK 4: Clear the container
// TASK 5: Fetch data from "https://dog.ceo/api/breeds/image/random/5"
// TASK 6: Parse response to JSON and loop through data.message
// TASK 7: For each image, create a div with class "user-card" and an <img> element
// TASK 8: Append each card to the container

const loadUsersBtn = document.getElementById("loadUsersBtn");
const userContainer = document.getElementById("userContainer");

loadUsersBtn.addEventListener("click", fetchDogs);

async function fetchDogs() {
  try {
    userContainer.innerHTML = "";

    const response = await fetch("https://dog.ceo/api/breeds/image/random/5");
    const data = await response.json();

    data.message.forEach((imgUrl) => {
      const div = document.createElement("div");
      div.className = "user-card";
      div.innerHTML = `<img src="${imgUrl}" alt="lots of dogs" style="width: 100%; border-radius: 10px;" />`;
      userContainer.appendChild(div);
    });
  } catch (error) {
    console.error("Something wrong with this mane!!", error);
  }
}
