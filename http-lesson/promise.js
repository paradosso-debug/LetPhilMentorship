// ✅ Basic Promise-only Fetch Example
fetch("https://randomuser.me/api/") // Make the HTTP GET request
  .then(function(response) {
    return response.json(); // Convert response to JSON
  })
  .then(function(data) {
    const user = data.results[0]; // Get the user info
    // Show user info in the page
    document.getElementById("user").innerHTML = `
      <h2>${user.name.first} ${user.name.last}</h2>
      <img src="${user.picture.medium}" alt="User Picture">
    `;
  })
  .catch(function(error) {
    // Catch and handle errors
    console.error("Promise-based fetch failed:", error);
  });
