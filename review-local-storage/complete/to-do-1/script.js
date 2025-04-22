// STEP 1: Create a function called addTodo that runs when the user clicks the "Add" button

// STEP 2: Inside the addTodo function, get the input element from the page using its ID ("todo-input")

// STEP 3: Get the text the user typed by accessing the .value of the input element
// Also use .trim() to remove any spaces at the beginning and end

// STEP 4: Check if the input is empty  — if it is, stop the function using return

// STEP 5: Get any existing todos from localStorage

// If there’s nothing in storage yet, use an empty array []

// STEP 6: Add the new todo text to the array using the .push() method

// STEP 7: Save the updated array back into localStorage

// STEP 8: Clear the input field by setting its value to an empty string.

// STEP 9: Call a function named renderTodos to update the screen with the new list

function addTodo() {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();

  if (todoText === "") return;

  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todoText);

  localStorage.setItem("todos", JSON.stringify(todos));

  todoInput.value = "";

  renderTodos();
}
//-------------------------------------------------------------------

// STEP 10: Create a function called renderTodos that shows all saved todos on the screen

// STEP 11: Inside renderTodos, get the HTML element where the todos should appear (with ID "todo-list")

// STEP 12: Clear out any old content by setting the element’s innerHTML to an empty string
// This avoids showing duplicate items each time the function runs

// STEP 13: Get the saved todos from localStorage using JSON.parse and getItem again
// If there's nothing saved, use an empty array

// STEP 14: Loop through each item in the todos array using forEach
// For each item, you also get its index

// STEP 15: Inside the loop, create a new <li> element using document.createElement("li")

// STEP 16: Add a class to this <li> for styling (e.g., "todo-item") using .className

// STEP 17: Set the content of the <li> to show the todo text and a "Remove" button
// Use innerHTML and write a <span> for the todo text and a <button> for removing

// STEP 18: In the button’s onclick attribute, call removeTodo and pass the index of the current item

// STEP 19: Add the newly created <li> to the todo list using .appendChild

function renderTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${todo} <button onclick="removeTodo(${index})"> KILL-BILL</button>`;
    todoList.appendChild(li);
  });
}
//shes legit
//-------------------------------------------------------------------

// STEP 20: Create a function named removeTodo that accepts the index of the item to delete

// STEP 21: Inside the function, get the current list of todos from localStorage and parse it into an array

// STEP 22: Use .splice(index, 1) to remove the item at that position in the array

// STEP 23: Save the updated array back into localStorage (use JSON.stringify and setItem again)

// STEP 24: Call renderTodos() to update the screen and show the updated list

function removeTodo(index) {
  const todos = JSON.parse(localStorage.getItem("todos") || []);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

//-------------------------------------------------------------------

// STEP 25: Create a function named clearTodos to remove all todo items

// STEP 26: Inside clearTodos, remove the "todos" item from localStorage using removeItem

// STEP 27: Then call renderTodos() to clear the list from the screen

function clearTodos() {
  localStorage.removeItem("todos");
  renderTodos();
}

//-------------------------------------------------------------------

// STEP 28: When the page first loads, call renderTodos() once
// This will display any previously saved todos that are still in localStorage

renderTodos();
