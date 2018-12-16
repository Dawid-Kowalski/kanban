let uniqueID = 0;
    
function Column (id, name) {
	this.id = "id"+id;
	this.name = name;
}

function Task (id, text) {
	this.id = "id"+id;
	this.text = text;
}

Column.prototype = {

	create: function() {
		let template = document.getElementById("template-column").innerHTML;
 		let columnsHTML = document.getElementById("columns");
  		let newColumnHTML = document.createElement("td");

  		Mustache.parse(template);

  		newColumnHTML.innerHTML = Mustache.render(template, this);

  		let self = this;

  		newColumnHTML.id = this.id;

  		newColumnHTML.addEventListener("click", function (event) {
   			
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

    	});

  		columns.appendChild(newColumnHTML);

  		let el = document.getElementById(this.id);
		let sortable = Sortable.create(el);
	},

	removeColumn: function() {
      	let columnToDel = document.getElementById(this.id);
      	let columnsHTML = document.getElementById("columns");
      	columns.removeChild(columnToDel);
    }
}


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
	},

	removeTask: function(column) {
      	let taskToDel = document.getElementById(this.id);
      	let columnHTML = document.getElementById(column.id);
      	columnHTML.removeChild(taskToDel);
    }
}

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

  	let newColumn = new Column(uniqueID, columnName);
  	newColumn.create();
}