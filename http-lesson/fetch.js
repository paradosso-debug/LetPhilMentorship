// ✅ Fetch user data using Fetch API with Promises
fetch("https://randomuser.me/api/") // Step 1: Make a GET request to the API
  .then(response => {
    // Step 2: Convert the response body to JSON
    return response.json();
  })
  .then(data => {
    // Step 3: Access the first user object from the results
    const user = data.results[0];

    // Step 4: Display the user's name and picture
    document.getElementById("user").innerHTML = `
      <h2>${user.name.first} ${user.name.last}</h2>
      <img src="${user.picture.medium}" alt="User Picture">
    `;
  })
  .catch(error => {
    // Step 5: Catch and display any errors that occur
    console.error("Fetch error:", error);
  });
