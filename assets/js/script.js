var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
  // prevent browser from refreshing
  event.preventDefault();
  // input task name.
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  //check if input value is empty
  if (!taskNameInput || !taskTypeInput) {
    alert("you need to fill out the task form!");
    return false;
  }

  //package up data above as an obj to use in var createTaskEl
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  //send data obj  as an argumet to createTaskEl
  createTaskEl(taskDataObj);
  formEl.reset();
};

var createTaskEl = function (taskDataObj) {
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
    taskDataObj.name +
    "</h3><span class = 'task-type'>" +
    taskDataObj.type +
    "</span>";

  //adds taskInfoEl inside listItemEl
  listItemEl.appendChild(taskInfoEl);

  // append entire List Item to List
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);
