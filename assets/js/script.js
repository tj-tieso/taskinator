var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  // prevent browser from refreshing
  event.preventDefault();
  // input task name.
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  console.log(taskTypeInput);
  //creates new list item in HTML
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  // create div in HTML to hold task-info within the list-item
  var taskInfoEl = document.createElement("div");
  //gives it a class name
  taskInfoEl.className = "task-info";
  // adds HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class='task'name'>" +
    taskNameInput +
    "</h3><span class = 'task-type'>" +
    taskTypeInput +
    "</span>";

  //adds taskInfoEl inside listItemEl
  listItemEl.appendChild(taskInfoEl);

  // append entire List Item to List
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
