// Task 1: Grab references to specific DOM elements by id
// 1.1 Declare const fetchBtn referencing the element with id "fetchBtn"
// 1.2 Declare const fetchMultipleBtn referencing the element with id "fetchMultipleBtn"
// 1.3 Declare const searchInput referencing the element with id "searchInput"
// 1.4 Declare const themeToggle referencing the element with id "themeToggle"
// 1.5 Declare const userContainer referencing the element with id "userContainer"
// 1.6 Declare const loader referencing the element with id "loader"
const fetchBtn = document.getElementById("fetchBtn");
const fetchMultipleBtn = document.getElementById("fetchMultipleBtn");
const searchInput = document.getElementById("searchInput");
const userContainer = document.getElementById("userContainer");
const loader = document.getElementById("loader");
const themeToggle = document.getElementById("themeToggle");

// Additional Features - Grab exercise buttons & result container
const ex1Btn = document.getElementById("ex1Btn");
const ex2Btn = document.getElementById("ex2Btn");
const ex3Btn = document.getElementById("ex3Btn");
const exerciseResult = document.getElementById("exerciseResult");

// Task 2: Initialize in-memory data storage
// 2.1 Declare let users as an empty array to hold fetched user objects

ex1Btn.addEventListener("click", exercise1);
ex2Btn.addEventListener("click", exercise2);
ex3Btn.addEventListener("click", exercise3);

let users = [];

// Task 3: Attach event listeners
// 3.1 Add a click listener on fetchBtn that calls fetchUsers(1)
// 3.2 Add a click listener on fetchMultipleBtn that calls fetchUsers(5)
// 3.3 Add an input listener on searchInput that calls filterUsers()
// 3.4 Add a change listener on themeToggle that calls toggleTheme()

fetchBtn.addEventListener("click", () => fetchUsers(1));
fetchMultipleBtn.addEventListener("click", () => fetchUsers(5));
searchInput.addEventListener("input", filterUsers);
themeToggle.addEventListener("change", toggleTheme);

// Task 4: Implement fetchUsers(count) function
// 4.1 Reset users to an empty array
// 4.2 Clear userContainer content
// 4.3 Show loader element
// 4.4 Fetch random users from API using count parameter
//   4.4.1 On success: hide loader, update users array, call renderUsers(users)
//   4.4.2 On error: hide loader, display error in userContainer, log error
function fetchUsers(count) {
  users = [];
  userContainer.innerHTML = "";
  loader.style.display = "block";
  axios
    .get(`https://randomuser.me/api/?results=${count}`)
    .then((response) => {
      loader.style.display = "none";
      users = response.data.results;
      renderUsers(users);
    })
    .catch((error) => {
      loader.style.display = "none";
      userContainer.innerHTML = "<p> Error fetching data</p>";
      console.error(error);
    });
}

// Task 5: Implement renderUsers(list) function
// 5.1 Clear userContainer content
// 5.2 For each user in list:
//   5.2.1 Create a card element
//   5.2.2 Assign it the class "user-card"
//   5.2.3 Populate with picture, name, age, email, location, phone
//   5.2.4 Append card to userContainer

function renderUsers(list) {
  userContainer.innerHTML = "";
  list.forEach((user) => {
    let card = document.createElement("div");
    card.className = "user-card";
    card.innerHTML = `
        <img src="${user.picture.medium}" alt="user-picture"/>
        <h3>Name: ${user.name.first} ${user.name.last}</h3>
        <p>Age: ${user.dob.age}</p>
        <p>Email: ${user.email}</p>
        <p>Located: ${user.location.city} ${user.location.country} </p>
        <p>Phone-number: ${user.phone}</p>
        `;
    userContainer.appendChild(card);
  });
}

// Task 6: Implement filterUsers() function
// 6.1 Read and lowercase the value from searchInput
// 6.2 Filter users array based on term matching full name
// 6.3 Call renderUsers with filtered array
function filterUsers() {
  let term = searchInput.value.toLowerCase();
  let filtered = users.filter((u) => {
    let fullName = `${u.name.first} ${u.name.last}`.toLowerCase();
    return fullName.includes(term);
  });
  console.log("This is filterUsers being called");
  renderUsers(filtered);
}

// Task 7: Implement toggleTheme() function
// 7.1 Toggle the "dark" class on document.body based on themeToggle.checked

function toggleTheme() {
  document.body.classList.toggle("dark", themeToggle.checked);
  console.log("This is toggleTheme being called");
}

// Task 8: exercise1() – Fetch and render 5 US users as cards
// 8.1 Clear any existing user cards and previous text results
// 8.2 Show the loading spinner
// 8.3 Send GET request to fetch 5 users from the US
//   8.3.1 On success:
//     • Hide the spinner
//     • Save the fetched users into the global `users` array
//     • Call renderUsers(users) to display them
//   8.3.2 On error:
//     • Hide the spinner
//     • Show an error message in userContainer
//     • Log the error to console

function exercise1() {
  userContainer.innerHTML = "";
  exerciseResult.textContent = "";

  loader.style.display = "block";

  axios
    .get("https://randomuser.me/api/?results=5&nat=US")
    .then((response) => {
      loader.style.display = "none";
      users = response.data.results;
      renderUsers(users);
    })
    .catch((err) => {
      loader.style.display = "none";
      userContainer.innerHTML = "<p> Error loading users</p>";
      console.error("Exercise 1 error", err);
    });
}

// Task 9: exercise2() – Count males vs. females from the global users
// 9.1 Clear any existing user cards
// 9.2 Show a “Counting…” message in exerciseResult
// 9.3 Hide the loader (no new fetch here)
// 9.4 If no users are loaded yet, prompt to run Exercise 1 first and exit
// 9.5 Otherwise, tally gender counts in the global `users` array
// 9.6 Display the counts in exerciseResult

function exercise2() {
  userContainer.innerHTML = "";
  exerciseResult.textContent = "Counting..";
  loader.style.display = "none";

  if (!users.length) {
    exerciseResult.textContent = "Run Exercise 1 first to load users";
    return;
  }
  let maleCount = 0;
  let femaleCount = 0;
  users.forEach((u) => {
    if (u.gender === "male") maleCount++;
    else if (u.gender === "female") femaleCount++;
  });
  exerciseResult.textContent = `Males: ${maleCount} Females: ${femaleCount} `;
}

// Task 10: exercise3() – Compute average age from the global users
// 10.1 Clear any existing user cards
// 10.2 Show a “Calculating…” message in exerciseResult
// 10.3 Hide the loader (no new fetch here)
// 10.4 If no users are loaded yet, prompt to run Exercise 1 first and exit
// 10.5 Sum all ages in the global `users` array
// 10.6 Calculate average age (totalAge / number of users), rounded to one decimal place
// 10.7 Display the average in exerciseResult

function exercise3() {
  userContainer.innerHTML = "";
  exerciseResult.textContent = "Calculating...";
  loader.style.display = "none";

  if (!users.length) {
    exerciseResult.textContent = "Run Exercise 1 first to load users.";
    return;
  }

  const totalAge = users.reduce((sum, u) => sum + u.dob.age, 0);

  const average = (totalAge / users.length).toFixed(1);

  exerciseResult.textContent = `Average Age: ${average} `;
}
