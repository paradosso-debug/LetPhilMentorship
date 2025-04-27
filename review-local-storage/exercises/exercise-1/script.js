// STEP 1: Create a function named saveData (no parameters needed)
// This function will run when the user clicks the "Save" button

// STEP 2: Inside saveData(), use document.getElementById("name") to get the input field with ID "name"
// Use .value at the end to get the text the user typed
// Store that value in a variable called name

// STEP 3: Do the same for the email input field
// Use document.getElementById("email").value and store it in a variable called email

// STEP 4: Save both name and email to localStorage using localStorage.setItem()
// The key should be "formData" and the value must be a string
// Use JSON.stringify({ name, email }) to convert the object into a string before saving

//-------------------------------------------------------------------

// STEP 5: Create a new function called loadData (no parameters)
// This function will run when the page loads, to check if saved data exists

// STEP 6: Inside loadData(), use localStorage.getItem("formData") to get the stored value
// Wrap it in JSON.parse() to convert it from string back into an object
// Store this in a variable called storedData

// STEP 7: Check if storedData is not null or undefined (use an if statement)
// If it exists, it means there’s saved data

// STEP 8: Use document.getElementById("name").value = storedData.name
// This puts the saved name back into the input field

// STEP 9: Do the same for the email input field using storedData.email

//-------------------------------------------------------------------

// STEP 10: Call the loadData() function at the bottom of the script
// This makes sure that the form automatically fills in saved data when the page opens or reloads
