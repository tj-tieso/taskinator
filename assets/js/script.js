var taskIdCounter = 0;

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
  //add task-id as custom attr
  listItemEl.setAttribute("data-task-id", taskIdCounter);

  // create div in HTML to hold task-info within the list-item
  var taskInfoEl = document.createElement("div");
  //gives it a class name
  taskInfoEl.className = "task-info";
  // adds HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";
  //adds taskInfoEl inside listItemEl
  listItemEl.appendChild(taskInfoEl);

  //
  var taskActionsEl = createTaskActions(taskIdCounter);
  listItemEl.appendChild(taskActionsEl);

  // append entire List Item to List
  tasksToDoEl.appendChild(listItemEl);
  //increase task counter for next unique id
  taskIdCounter++;
};

var createTaskActions = function (taskId) {
  var actionContainerEl = document.createElement("div");
  actionContainerEl.className = "task-actions";
  //create edit button
  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Edit";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.setAttribute("data-task-id", taskId);

  actionContainerEl.appendChild(editButtonEl);

  var deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent = "Delete";
  deleteButtonEl.className = "btn delete-btn";
  deleteButtonEl.setAttribute("data-task-id", taskId);

  actionContainerEl.appendChild(deleteButtonEl);

  var statusSelectEl = document.createElement("select");
  statusSelectEl.className = "select-status";
  statusSelectEl.setAttribute("name", "status-change");
  statusSelectEl.setAttribute("data-task-id", taskId);

  actionContainerEl.appendChild(statusSelectEl);

  var statusChoices = ["To Do", "In Progress", "Completed"];

  for (var i = 0; i < statusChoices.length; i++) {
    //create option element
    var statusOptionEl = document.createElement("option");
    statusOptionEl.textContent = statusChoices[i];
    statusOptionEl.setAttribute("value", statusChoices[i]);

    //append statusOptionEl to select
    statusSelectEl.appendChild(statusOptionEl);
  }

  return actionContainerEl;
};

formEl.addEventListener("submit", taskFormHandler);
