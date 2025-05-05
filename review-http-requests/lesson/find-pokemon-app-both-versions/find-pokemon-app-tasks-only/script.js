// 🟡 Task 1: Define a reusable log() function to output messages to the browser console for debugging

// 🟡 Task 2: Create an async function called getPokemon that accepts a Pokémon name as input

// 🟡 Task 3: Inside getPokemon, validate the input to ensure it's a non-empty string, otherwise throw an error

// 🟡 Task 4: Use fetch() to make a GET request to PokéAPI using the provided Pokémon name

// 🟡 Task 5: If the API response status is not OK (e.g., 404), throw an error to be caught later

// 🟡 Task 6: Convert the API response into a usable JavaScript object using .json()

// 🟡 Task 7: Extract these pieces of data from the JSON: name, height, weight, front image, types, and cries

// 🟡 Task 8: Create a div element with class "pokemon-card" to hold the Pokémon's visual card

// 🟡 Task 9: Create an <img> element and set its source to the Pokémon’s sprite image, then append it to the card

// 🟡 Task 10: Create a <p> element that includes name, height in meters, weight in oz, and type list

// 🟡 Task 11: Create a new container <div> that will hold sound buttons for each cry

// 🟡 Task 12: For each cry sound, create a button labeled with its type and add an event listener to play the cry

// 🟡 Task 13: Append the cry button container to the Pokémon card

// 🟡 Task 14: Append the finished card to the output section in the HTML

// 🟡 Task 15: In the catch block, convert the error object to a string for easier comparison

// 🟡 Task 16: If the error was "parameter invalid", use prompt() to get a valid name from the user and retry

// 🟡 Task 17: If the error was "404", alert the user about incorrect spelling and retry with new input

// 🟡 Task 18: Trigger the getPokemon(undefined) function on page load so that prompt appears right away
