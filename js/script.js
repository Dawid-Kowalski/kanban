let uniqueID = 0;

let columns = [];
    
function Column (id, name, buttonID) {
	this.id = "id"+id;
	this.name = name;
  this.buttonID = "id"+buttonID;
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
    let buttonID = uniqueID;

  	let newColumn = new Column(columnID, columnName, buttonID);
    columns.push(newColumn);
    addToAllColumns();
}

function addToAllColumns() {
    for(let i=0; i<columns.length; i++){
      addInHTML(columns[i]);
      addEvent(columns[i]);
    }
}

function addInHTML(column) {
    let columnTemplate = document.getElementById("column-template").innerHTML;
    let columnsInHTML = document.getElementById("columns");

    let generatedColumn = Mustache.render(columnTemplate, column);
    columnsInHTML.innerHTML += generatedColumn;
}

function addEvent(column) {
    let button = document.getElementById(column.buttonID);
    button.addEventListener("click", function(event) {
      alert(column.name);
    });
}

