// 🟡 Task 1: Define an async function named getPokemon that accepts one parameter: pokemonName
// This function should fetch data about a Pokémon using the API and display it as a card on the page

// 🟡 Task 2: Validate the input to ensure it's a non-empty string
// Check if the input exists AND is a string using typeof
// If the input is invalid, throw an error with a message

// 🟡 Task 3: Use fetch() to request data from the PokéAPI using the lowercase Pokémon name
// Use template literals to insert the Pokémon name in the URL
// Use toLowerCase() to avoid issues with capitalization

// 🟡 Task 4: If the response is not successful (e.g., 404), throw an error with the status code
// Use response.ok to check the status
// If it's not OK, throw a new Error with the status number

// 🟡 Task 5: Convert the successful response to a usable JavaScript object
// Use await with response.json() to parse the data

// 🟡 Task 6: Extract values from the Pokémon object
// Get name, height, weight, and the front_default image from the sprite object

// 🟡 Task 7: Create an array of type names (e.g., "electric", "fire")
// Use map() to loop through the types array and get each type name

// 🟡 Task 8: Create an array of sound objects with type and URL
// Use Object.entries() to turn the cries object into an array of [key, value] pairs
// Map each pair to an object with soundType and sound properties

// 🟡 Task 9: Create the card container <div> and apply styling class
// Use document.createElement("div")
// Add the "pokemon-card" class using classList.add()

// 🟡 Task 10: Create the image element and set its source to the sprite URL
// Create an <img> element and set the src attribute to the image URL
// Append the image to the card

// 🟡 Task 11: Create a paragraph with Pokémon info and style it
// Create a <p> element
// Add margin and font size using style properties - margin 5px & fontSize 12px.
// Use innerHTML to insert name, height (converted to meters), weight, and type list
// Append the paragraph to the card

// 🟡 Task 12: Create a container for cry sound buttons

// 🟡 Task 13: Loop through the sounds array and create a button for each cry
// Use a for loop to go through each sound object
// Create a <button> for each sound
// Set the button’s label to the sound type (e.g., "legacy")

// 🟡 Task 14: When clicked, play the cry using the Audio object
// Add an event listener to the button
// Use new Audio(url) to create an audio instance
// Use .play() to play the sound

// Append each button to the sound container

// 🟡 Task 15: Append the sound button container to the main card

// 🟡 Task 16: Append the entire Pokémon card to the visible output container******
// Use document.getElementById("output").appendChild(card)

async function getPokemon(pokemonName) {
  try {
    if (typeof pokemonName !== "string" || !pokemonName) {
      throw new Error("messed up");
    }
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );
    if (!res.ok) throw new Error(res.status);
    const pokemon = await res.json();
    console.log(pokemon);
    const name = pokemon.name;
    const height = pokemon.height;
    const weight = pokemon.weight;
    const image = pokemon.sprites.front_default;

    const types = pokemon.types.map((element) => element.type.name);
    const sounds = Object.entries(pokemon.cries).map(([key, val]) => {
      return {
        soundType: key,
        sound: val,
      };
    });

    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    const img = document.createElement("img");
    img.src = image;
    card.appendChild(img);

    const PokemonInfo = document.createElement("p");

    PokemonInfo.style.margin = "5px";
    PokemonInfo.style.fontSize = "12px";

    PokemonInfo.innerHTML = `${name} <br> ${
      height * 0.1
    }m/ ${weight}oz<br> ${types.join(",")}`; //  <p>hello </p>

    card.appendChild(PokemonInfo);

    const soundContainer = document.createElement("div");

    for (let i = 0; i < sounds.length; i++) {
      const button = document.createElement("button");
      button.textContent = sounds[i].soundType;
      button.addEventListener("click", () => {
        const cry = new Audio(sounds[i].sound);
        cry.play();
      });
      soundContainer.appendChild(button);
    }
    card.appendChild(soundContainer);
    document.getElementById("output").appendChild(card);
  } catch (error) {
    const errorString = error.toString();
    console.log("errorSting =", errorString);
    if (errorString === "Error: parameter invalid..") {
      const newPokemon = prompt("Please enter a Pokèmon name:");
      getPokemon(newPokemon);
    }
    if (errorString === "error 404") {
      const newPokemon = prompt("Pokèmon not found...");
      getPokemon(newPokemon);
    }
  }
}

document.getElementById("searchButton").addEventListener("click", function () {
  const name = document.getElementById("searchPokemon").value.trim();
  getPokemon(name);
});

// 🟡 Task 20: Add an event listener to the search button to trigger the fetch when clicked
// Use addEventListener("click", function...) on the search button

// 🟡 Task 21: Get the value from the input field and trim extra spaces
// Use .value to read the input and .trim() to clean it

// 🟡 Task 22: Fetch and display the Pokémon using the name
// Call getPokemon(name) to start the fetch and render process
