// STEP 1: Use console.log("LET'S GET STARTED"); to confirm the script is working when the page loads

// STEP 2: Create a function named ListItemUI that takes two parameters:
// - task (an object with properties like value and completed)
// - taskIdx (the index of the task in the todos array)

// STEP 3: Inside the ListItemUI function, return a template literal using backticks (``) that includes:
// - A <div> element with the class "list-item" and attribute draggable="true"
// - Inside the div, include:
//     1. A <p> tag with inline style text-decoration:
//         - If task.completed is true → text-decoration should be "line-through"
//         - If task.completed is false → text-decoration should be "none"
//         - Use ${task.completed ? "line-through" : "none"} inside the style attribute
//         - Display the task text using ${task.value}
//     2. A <span> with three buttons:
//         - Button 1: Calls markCompleted(taskIdx)
//         - Button 2: Calls editTask(taskIdx)
//         - Button 3: Calls removeTask(taskIdx)
//-------------------------------------------------------------------
// STEP 4: Declare a variable named todos and set it to an empty array []
// This will hold all task objects in memory
//-------------------------------------------------------------------
// STEP 5: Use window.onload = function () { ... } to run some code when the page finishes loading

// STEP 6: Inside the onload function:
// - Get the stored todos from localStorage using localStorage.getItem("todos")
// - If storedTodos exists (is not null):
//     - Parse it back to an array using JSON.parse()
//     - Assign the result to the todos array

// STEP 7: Call the renderTodos() function to display the tasks on the page
//-------------------------------------------------------------------

// STEP 8: Create a function named markCompleted that takes one parameter: taskIdx (a number)

// STEP 9: Inside the function:
// - Use document.querySelector() with a CSS selector that targets the <p> element of the specific task
//   Example: `.list-item:nth-child(${taskIdx + 1}) > p`

// STEP 10: Check if the <p> element’s style.textDecoration is "line-through"
// - If it is, set todos[taskIdx].completed = false
// - If it’s not, set todos[taskIdx].completed = true

// STEP 11: Save the updated todos array to localStorage using:
// localStorage.setItem("todos", JSON.stringify(todos))

// STEP 12: Call renderTodos() to update the view
//-------------------------------------------------------------------
// STEP 13: Create a function named editTask that takes one parameter: taskIdx

// STEP 14: Inside the function:
// - Get the specific task's DOM element using document.querySelector(`.list-item:nth-child(${taskIdx + 1})`)
// - Get the second button inside that task element using .querySelector("button:nth-child(2)")

// STEP 15: If the button’s innerText is "edit":
// - Change the button text to "save"
// - Remove the <p> element that shows the task using .remove()
// - Create a new <input> element using document.createElement("input")
// - Set input.value to todos[taskIdx].value
// - Add an event listener to the same button using addEventListener("click", function() { ... })
//     - Inside the click function:
//         • Update todos[taskIdx].value = input.value
//         • Save todos to localStorage using setItem
//         • Call renderTodos()
// - Add the input to the task element using task.prepend(input)

// STEP 16: If the button text is "save", switch it back to "edit" using innerText
//-------------------------------------------------------------------

// STEP 17: Create a function named removeTask that takes one parameter: taskIdx

// STEP 18: Inside the function:
// - Use console.log("remove task"); to confirm it’s being called
// - Remove the task using the .filter() method:
//     todos = todos.filter((_, idx) => idx !== taskIdx)
// - Save the updated array using:
//     localStorage.setItem("todos", JSON.stringify(todos))
// - Call renderTodos() to update the view

// STEP 19: Add an event listener to the button with ID "addTodoButton"
// Use: addTodoButton.addEventListener("click", function () { ... })

// STEP 20: Inside the event listener function:
// - Push a new task object into the todos array:
//     { value: todoInput.value, completed: false }
// - Save todos to localStorage using setItem
// - Call renderTodos() to update the task list
// - Clear the input field by setting todoInput.value = ""

/* STEP 21: Create a function named renderTodos with no parameters */

// STEP 22: Inside the renderTodos function:
// - Clear the current list using:
//     todoList.innerHTML = ""

// STEP 23: Loop through the todos array using a for loop:
//     for (let i = 0; i < todos.length; i++)

// STEP 24: Inside the loop, call ListItemUI(todos[i], i) to get the HTML for each task
// - Append the result to todoList.innerHTML using +=
