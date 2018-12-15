let uniqueID = 0;
    
function Column (id, name) {
	this.id = id;
	this.name = name;
}

Column.prototype = {

	create: function() {
		let template = document.getElementById("template-column").innerHTML;
 		let columns = document.getElementById("columns");
  		let element = document.createElement("td");

  		Mustache.parse(template);

  		element.innerHTML = Mustache.render(template, this);

  		columns.appendChild(element);
	}
}

function generateID() {
    uniqueID++;
    return uniqueID;
}

function addColumn() {

  	generateID();

  	let columnName = prompt("podaj nazwę kolumny");

  	let newColumn = new Column(uniqueID, columnName);
  	newColumn.create();
}