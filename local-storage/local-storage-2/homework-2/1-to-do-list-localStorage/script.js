//  Function to add a new task
// 1.Get the input field element using its ID "task"

// 2. Get the existing tasks from LocalStorage - name variable "tasks"
// JSON.parse turns the string back into an array
// If there are no tasks yet, use an empty array []

// 3. Push (add) the value typed by the user into the tasks array

// 4. Convert the updated tasks array into a string and store it in LocalStorage
// This is required because LocalStorage can only save strings

// 5. Call the function to display the updated tasks on the screen - name of called function is displayTasks()

// 6. Clear the input field after adding the task

// Function displayTasks() to display all tasks from LocalStorage

// 1. Get the <ul> element where we will show the list of tasks - name of variable "taskList"

// 2. Clear any previous content inside the list so it doesn't repeat

// 3. Get the saved tasks from LocalStorage and turn them back into an array

// 4. Use forEach to loop through the array and display each task

// 5. Create a new <li> element for each task

// 6. Set the content of the <li> to show the task and a delete button - use template literal

// 7. Add the <li> to the task list

// Function to remove a task from the list - function name removeTask()

// 1. Get the current list of tasks from LocalStorage and turn it into an array

// 2. Remove 1 task from the array at the given index - use splice method

// 3. Save the updated tasks back into LocalStorage

// 4. Update the display so the removed task disappears from the screen

// 5. Automatically run displayTasks() when the page loads
// So any saved tasks show up immediately
