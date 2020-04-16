//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions

function addTodo(event) {
  //Prevent from submitting
  event.preventDefault();

  // create todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create <li>
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;

  // create complete button
  const comleteButton = document.createElement("button");
  comleteButton.innerHTML = '<i class="fas fa-check"></i>';
  comleteButton.classList.add("complete-btn");

  // create complete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");

  todoDiv.appendChild(newTodo);
  todoDiv.appendChild(comleteButton);
  todoDiv.appendChild(trashButton);

  //append to list
  todoList.appendChild(todoDiv);

  todoInput.value = "";
}
