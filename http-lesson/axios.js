// ✅ Function to fetch user data using Axios and async/await
async function getUser() {
  try {
    // Step 1: Await the Axios GET request
    const response = await axios.get("https://randomuser.me/api/");

    // Step 2: Extract the user from the response
    const user = response.data.results[0];

    // Step 3: Display the user's name and image
    document.getElementById("user").innerHTML = `
      <h2>${user.name.first} ${user.name.last}</h2>
      <img src="${user.picture.large}" alt="User Picture">
    `;
  } catch (error) {
    // Step 4: Handle any errors that occur
    console.error("Axios error:", error);
  }
}

// ✅ Dynamically load Axios from CDN then run the function
const script = document.createElement("script"); // Create a new script tag
script.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"; // Set its source
script.onload = getUser; // When it loads, run getUser
document.head.appendChild(script); // Add the script to the document
