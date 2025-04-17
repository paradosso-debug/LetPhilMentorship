//  Function to set the website theme based on user choice

// Save the user's theme preference in the browser's LocalStorage
// This mleans we store a value like "light" or "dark" under the key "theme"
function setTheme(theme) {
  localStorage.setItem("theme", theme);

  document.body.style.background = theme === "dark" ? "#333" : "#fff";

  // Change the text color to match the theme
  // White text for dark background and black text for light background
  document.body.style.color = theme === "dark" ? "#fff" : "#000";
}

// Change the background color of the webpage depending on the theme
// If the theme is dark, background becomes dark gray (#333)
// Otherwise, background is white #fff

const savedTheme = localStorage.getItem("theme");

// When the page loads, check if the user previously selected a theme use the variable name "savedTheme"
if (savedTheme) {
  setTheme(savedTheme);
}
// If a saved theme exists, apply it by calling setTheme
