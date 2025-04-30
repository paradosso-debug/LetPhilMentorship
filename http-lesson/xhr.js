// ✅ Function to fetch user data using XMLHttpRequest (XHR)
function getUser() {
  // Step 1: Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Step 2: Set up the request
  xhr.open("GET", "https://randomuser.me/api/"); // GET request to the API

  // Step 3: Set what happens when the request successfully loads
  xhr.onload = function () {
    // Step 4: Check if the status code is successful (200-299)
    if (xhr.status >= 200 && xhr.status < 300) {
      // Step 5: Parse the JSON string into an object
      var data = JSON.parse(xhr.responseText);
      // Step 6: Call a function to display the user's info
      displayUser(data.results[0]);
    } else {
      // Step 7: Handle error responses (like 404 or 500)
      console.error("XHR Error:", xhr.status);
    }
  };

  // Step 8: Handle network errors (like internet down)
  xhr.onerror = function () {
    console.error("Network Error");
  };

  // Step 9: Send the request
  xhr.send();
}

// ✅ Function to display the user's name and image on the page
function displayUser(user) {
  document.getElementById("user").innerHTML = `
    <h2>${user.name.first} ${user.name.last}</h2>
    <img src="${user.picture.medium}" alt="User Picture">
  `;
}

// ✅ Call the function to start the process
getUser();
