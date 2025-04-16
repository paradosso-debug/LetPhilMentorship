// Select input, button, and list using querySelector
console.log("Gorilla");
const input = document.querySelector(".task-input");
const addBtn = document.querySelector(".add-btn");
const list = document.querySelector(".task-list");
// Click listener for Add Task button

addBtn.addEventListener("click", () => {
  let task = input.value;
  if (task !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = task;
    list.appendChild(listItem);
    input.value = "";
  }
});
//

/*
const taskInput = document.querySelector(".task-input");
const addBtn = document.querySelector(".add-btn");
const listInput = document.querySelector(".task-list");

addBtn.addEventListener("click", () => {
  let taskText = taskInput.value;
  if (taskText !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = taskText;
    listInput.appendChild(listItem);
    listInput.value = "";
  }
});
*/
