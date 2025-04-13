// Select input, button, and list using querySelector
const addButton = document.querySelector(".add-btn");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");

// Click listener for Add Task button
addButton.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      listItem.remove(); // Remove this list item
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = ""; // Clear the field
  }
});
