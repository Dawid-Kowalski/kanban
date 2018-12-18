let uniqueID = 0;
    
function Column (id, name, buttonID) {
	this.id = "id"+id;
	this.name = name;
  this.buttonID = "id" + buttonID;
  this.button;
}

/*function Task (id, text) {
	this.id = "id"+id;
	this.text = text;
}
*/

Column.prototype = {

	create: function() {

    let self = this;

		let template = document.getElementById("template-column").innerHTML;
 		let columnsHTML = document.getElementById("columns");

  	Mustache.parse(template);

    columnsHTML.innerHTML += Mustache.render(template, this);

    this.button = document.getElementById(this.buttonID);
    console.log(this.button);

  	this.button.addEventListener("click", function (event) {
        alert(self.name);
    });

    console.log(this.button);
/*   			
   	  if (event.target.classList.contains("btn-col-delete")) {
      	 self.removeColumn();
      }

      if (event.target.classList.contains("add-task")) {
   				
   		   let taskName = prompt("podaj nazwę zadania");

			   if(taskName == null) {
			  	return;
			   }

  		  generateID();

  		  let newTask = new Task(uniqueID, taskName);
   				
   		 newTask.create(self);
      }
*/

		let sortableCol = Sortable.create(columnsHTML);
	},

	removeColumn: function() {
      	let columnToDel = document.getElementById(this.id);
      	let columnsHTML = document.getElementById("columns");
      	columns.removeChild(columnToDel);
    }
}

/*
Task.prototype = {

	create: function(column) {

		let self = this;

		let template = document.getElementById("template-task").innerHTML;
 		let columnHTML = document.getElementById(column.id);
  		let newTaskHTML = document.createElement("div");

  		Mustache.parse(template);

  		newTaskHTML.innerHTML = Mustache.render(template, self);

  		newTaskHTML.id = this.id;

  		newTaskHTML.addEventListener("click", function (event) {
   			
   			if (event.target.classList.contains("btn-task-delete")) {
      			self.removeTask(column);
    		}

    	});

  		columnHTML.appendChild(newTaskHTML);

  		let el = document.getElementById(column.id);
		let sortable = Sortable.create(el, {
		    group: "tasks",
		});
	},

	removeTask: function(column) {
      	let taskToDel = document.getElementById(this.id);
      	let columnHTML = document.getElementById(column.id);
      	columnHTML.removeChild(taskToDel);
    }
}
*/

function generateID() {
    uniqueID++;
    return uniqueID;
}

function addColumn() {

  	let columnName = prompt("podaj nazwę kolumny");

  	if(columnName == null) {
  		return;
  	}

  	generateID();
    let columnID = uniqueID;
    generateID();
    let buttonID = uniqueID;

  	let newColumn = new Column(columnID, columnName, buttonID);
    console.log("id:" + columnID + "button:" + buttonID)
  	newColumn.create();
}

