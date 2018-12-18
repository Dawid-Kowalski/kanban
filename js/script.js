let uniqueID = 0;
    
function Column (id, name, buttonDelID, buttonAddTaskID) {
	this.id = "id"+id;
	this.name = name;
  this.buttonDelID = "id"+buttonDelID;
  this.buttonAddTaskID = "id"+buttonAddTaskID;
}

function Task (id, name, buttonDelID) {
  this.id = "id"+id;
  this.name = name;
  this.buttonDelID = "id"+buttonDelID;
}

function generateID() {
    uniqueID++;
}

function addColumn() {

  	let columnName = prompt("podaj nazwę kolumny");

  	if(columnName == null) {
  		return;
  	}

  	generateID();
    let columnID = uniqueID;
    generateID();
    let buttonDelID = uniqueID;
    generateID();
    let buttonAddTaskID = uniqueID;

  	let newColumn = new Column(columnID, columnName, buttonDelID, buttonAddTaskID);
    addInHTMLcolumn(newColumn);
    addDelEventColumn(newColumn);
    addAddTaskColumn(newColumn);
    addDragToColumn(newColumn);
}

function addInHTMLcolumn(column) {
    let columnTemplate = document.getElementById("column-template").innerHTML;
    let columnsInHTML = document.getElementById("columns");
    let columnHTML = document.createElement("td");

    columnHTML.id = column.id;

    let generatedColumn = Mustache.render(columnTemplate, column);
    columnHTML.innerHTML = generatedColumn;
    columnsInHTML.appendChild(columnHTML);
}

function addDelEventColumn(column) {
    let button = document.getElementById(column.buttonDelID);
    button.addEventListener("click", function(event) {
      deleteColumn(column);
    });
}

function addAddTaskColumn(column) {
    let button = document.getElementById(column.buttonAddTaskID);
    button.addEventListener("click", function(event) {
      let newTask = addTask();
      addInHTMLtask(newTask, column);
      addDelEventTask(newTask, column);
    });
}

function deleteColumn(column) {
    let columnsInHTML = document.getElementById("columns");
    let columnToDel = document.getElementById(column.id);

    columnsInHTML.removeChild(columnToDel);
}

function addTask() {
    let taskName = prompt("podaj nazwę zadania");

    if(taskName == null) {
      return;
    }

    generateID();
    let taskID = uniqueID;
    generateID();
    let buttonDelID = uniqueID;

    let newTask = new Task(taskID, taskName, buttonDelID);

    return newTask;
}

function addInHTMLtask(task, column) {
    let taskTemplate = document.getElementById("task-template").innerHTML;
    let columnInHTML = document.getElementById(column.id);
    let taskHTML = document.createElement("div");

    taskHTML.id = task.id;

    let generatedTask = Mustache.render(taskTemplate, task);
    taskHTML.innerHTML = generatedTask;
    columnInHTML.appendChild(taskHTML);

    addDragToTask(task);
}

function addDelEventTask(task, column) {
    let button = document.getElementById(task.buttonDelID);
    button.addEventListener("click", function(event) {
      deleteTask(task, column);
    });
}

function deleteTask(task, column) {
    let columnInHTML = document.getElementById(column.id);
    let taskToDel = document.getElementById(task.id);

    columnInHTML.removeChild(taskToDel);
}

function addDragToColumn(column) {
    let space = document.getElementById(column.id);
    let sortable = Sortable.create(space.parentNode);
}

function addDragToTask(task) {
    let space = document.getElementById(task.id);
    let sortable = Sortable.create(space.parentNode);
}