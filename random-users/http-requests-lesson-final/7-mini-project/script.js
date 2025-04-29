// Async function to fetch 10 random users
async function fetchRandomUsers() {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data = await response.json();
  return data.results; // Return only the array of user results
}

// Function to create a user card element
function createUserCard(user) {
  const userCard = document.createElement("div");
  userCard.className = "user-card";

  const userImage = document.createElement("img");
  userImage.src = user.picture.large;
  userImage.alt = `${user.name.first} ${user.name.last}`;

  const userInfo = document.createElement("div");
  userInfo.className = "user-info";

  const userName = document.createElement("h2");
  userName.textContent = `${user.name.first} ${user.name.last}`;

  const userEmail = document.createElement("p");
  userEmail.textContent = user.email;

  userInfo.appendChild(userName);
  userInfo.appendChild(userEmail);
  userCard.appendChild(userImage);
  userCard.appendChild(userInfo);

  return userCard; // Return the completed card
}

// Function to display all users
async function displayUsers() {
  const users = await fetchRandomUsers();
  const userContainer = document.getElementById("user-container");

  // Loop through each user and append the created card to the page
  users.forEach((user) => {
    const userCard = createUserCard(user);
    userContainer.appendChild(userCard);
  });
}

// Call the function to start everything
displayUsers();