document.addEventListener("DOMContentLoaded", function() {

	let uniqueID = 0;
    
    data = 	{
    			id: 10
    		}


    function generateID () {
    	uniqueID++;
    	return uniqueID;
    }

 	let template = document.getElementById("template-column").innerHTML;
 	let columns = document.getElementById("columns");
  	let element = document.createElement("div");

  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);

  	columns.appendChild(element);
});