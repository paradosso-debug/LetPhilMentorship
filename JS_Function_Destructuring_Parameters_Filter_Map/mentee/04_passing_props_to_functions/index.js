// Task 1: Create a function that accepts an object with name and age
// Task 2: Console log the values from the object
// Task 3: Call the function and pass an object

function showUserInfo(user) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}
showUserInfo({ name: "Will", age: 25 });

// --- 10 Practice Tasks ---
// Example 1: Function receives a user object and logs name and age
function showUserName(user) {
  console.log(user.name + "," + user.age);
}
showUserName({ name: "Joanne", age: 62 });

function showUser(user) {
  console.log(user.name);
  console.log(user.age);
}
showUser({ name: "Joanne", age: 62 });

function showUser2({ name, age }) {
  console.log(name);
  console.log(age);
}

showUser2({ name: "Joanne1", age: 52 });

// Example 2: Use object destructuring to log user details
function userDetails({ name, age, address, phone }) {
  console.log(
    `${name}, is ${age}, his address is ${address}, and phone number is ${phone}`
  );
}

userDetails({ name: "manny", age: 25, address: "NYC", phone: "3476548435" });

// Example 3: Log city and country from an object
function local({ city, country }) {
  console.log(`I live in ${city}, in ${country}.`);
}
local({ city: "Brooklyn", country: "USA" });

// Example 4: Log username and email from an object
function logIn({ username, email }) {
  console.log(`username is ${username}, and email is ${email}`);
}

logIn({ username: "MannyMoney", email: "Manny1234@yahoo.com" });

// Example 5: Log views and likes from a stats object
function stats({ views, likes }) {
  console.log(
    `Bob received ${views} views, and ${likes} likes in todays report.`
  );
}
stats({ views: 210, likes: 1030 });

// Example 6: Log X and Y coordinates
function Coord({ X, Y }) {
  console.log(`X: ${X} degrees Y: ${Y} degrees`);
}

Coord({ X: 1027, Y: 2038 });
// Example 7: Log dark mode setting and language
function settings({ darkModeSetting, language }) {
  console.log(`theme: ${darkModeSetting} , ${language} `);
}
settings({ darkModeSetting: true, language: "JavaScript" });
// Example 8: Log title and length of a summary
const summary = ({ title, length }) => {
  console.log(`Title: ${title} length:${length} `);
};

summary({ title: "Javascript 101", length: "4:45:56" });
// Example 9: Log name, age, and job from user
function userDetails({ name, age, job }) {
  console.log(`Name: ${name}, Age: ${age}, Job:${job}`);
}
userDetails({ name: "Jim", age: 24, job: "SWE" });
// Example 10: Log sender and message content
function message({ from, content }) {
  console.log(`From: ${from}, Message ${content}`);
}
message({ from: "Jocelin", content: "Hello World!" });

// <Pizza size="large" toppings="Pepporoni" cust="thin"></Pizza>;

// function Greeting() {
//   return <h1> Hello, {props.name}!</h1>;
// }

// import react from react;

// <Greeting name="Will" />;
// <Greeting name="Will" />;
// <Greeting name="Will" />;
// <Greeting name="Will" />;
// <Greeting name="Will" />;
// <Greeting name="Will" />;
// <Greeting name="Will" />;
