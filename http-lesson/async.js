// ✅ Async function to fetch user data using async/await
async function getUser() {
  try {
    // Step 1: Await the fetch request to complete
    const response = await fetch("https://randomuser.me/api/");

    // Step 2: Await the JSON conversion of the response
    const data = await response.json();

    // Step 3: Access the user object
    const user = data.results[0];

    // Step 4: Display the user's info
    document.getElementById("user").innerHTML = `
      <h2>${user.name.first} ${user.name.last}</h2>
      <img src="${user.picture.large}" alt="User Picture">
    `;
  } catch (error) {
    // Step 5: Handle any errors that occur
    console.error("Async error:", error);
  }
}

// ✅ Call the function
getUser();
