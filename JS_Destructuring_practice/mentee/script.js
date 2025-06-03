// === Practice Tasks ===

// Task 1: Create a function that takes a book object and logs the title and author.

// Task 2: Create a function that receives a movie object and logs its name and rating.

// Task 3: Pass a product object to a function and display its name and price.

// Task 4: Create a function that logs weather info (temperature and condition) from a weather object.

// Task 5: Create a function that takes a profile object and logs username and bio.
// Task 6: Pass a dog object with name and breed to a function and log it.
// Task 7: Create a function that accepts a music track object and logs track name and artist.
// Task 8: Create a function that logs app settings (theme and notifications).
// Task 9: Create a function that takes a student object and logs name and grade.

// Task 10: Create a function that receives a location object and logs city and country.

function showBook({ title, author }) {
  console.log(`Book: ${title} by ${author}`);
}

showBook({ title: "1984" });

function movieRating({ name, rating }) {
  console.log(`Name: ${name}, Rating: ${rating}`);
}

movieRating({ name: "BladeRunner", rating: "10/10" });

function showProduct({ name, price }) {
  console.log(`name: ${name}, price: ${price}`);
}
showProduct({ name: "Grande Latte", price: "19.00" });

function weatherCondition({ temp, condition }) {
  console.log(`Temp: ${temp}, Condition: ${condition}`);
}
weatherCondition({ temp: "97", condition: "could be better" });

function userprofile({ username, bio }) {
  console.log(`username: ${username}, bio:${bio}`);
}
userprofile({ username: "Bob", bio: "Life is like a box of coco pops" });

function dog({ name, breed }) {
  console.log(`Name: ${name}, Breed: ${breed}`);
}

dog({ name: "spot", breed: "dolmation" });

function musicTrack({ title, artist }) {
  console.log(`title: ${title}, artist: ${artist}`);
}
musicTrack({ title: "Big Poppa", artist: " Biggie" });

function student({ name, grade }) {
  console.log(`name: ${name}, grade: ${grade}`);
}

student({ name: "Jocelin", grade: "32" });

// Task 10: Create a function that receives a location object and logs city and country.

function locationLog({ city, country }) {
  console.log(`city: ${city}, country: ${country}`);
}
locationLog({ city: "Seoul", country: "Korea" });
