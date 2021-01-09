console.log(localStorage.getItem("recipe"));

var recipes = JSON.parse(localStorage.getItem("recipe"));
var looper;

for(looper of recipes){
	
	
	var element = document.createElement("button");
	var lb = document.createElement("br");
	element.setAttribute("class", "button button1");
	element.innerHTML = looper["name"];
	element.setAttribute("onclick", "window.open(\'" + looper["link"] + "\',\'_blank\')");
	
	var abc= document.getElementById("r");
	abc.appendChild(element);
	abc.append(lb);
}


localStorage.removeItem("recipe");
