var lists = 0;
var checks = 0;

window.onload = function(){

	document.getElementById("button").onclick = function(){
		addTodo();
		countItem();
	}

	document.getElementById("buttonDelete").onclick = function(){
		deleteAllTodo();
	}

}


function addTodo(){

	//Label

	var label = document.createElement("label");
	label.innerHTML=" New task ";
	label.setAttribute("for", "task"+lists);
	var attr = document.createAttribute("id");
	label.contentEditable = true;
	attr.value = "labels";
	label.setAttributeNode(attr);


	//checkbox

	var input = document.createElement("input");
	input.type="checkbox";
	input.name="name";
	input.id="chkBox"; 

	//button
	var button = document.createElement("button");
	var t = document.createTextNode("Delete");
    button.appendChild(t);
    button.onclick=deleteTodo;
	
	//li

	var li = document.createElement("li");
	li.appendChild(input);
	li.appendChild(label);
	li.appendChild(button);
	li.onclick=updateCounter;
	var attr2 = document.createAttribute("id");
	attr2.value = "todos";
	li.setAttributeNode(attr2);


	document.getElementById("todo-list").appendChild(li);

	

}

function countItem(){
	lists=lists+1;
	checks=checks+1;

	document.getElementById("item-count").innerHTML=lists;
	document.getElementById("unchecked-count").innerHTML=checks; 

}

function updateCounter(){

	var inputs = document.getElementsByTagName("input");
	checks = lists;
	for(i=0; i< inputs.length; i++){
		
		if(inputs[i].checked){
			checks=checks-1;
			
		}
	
	}
	document.getElementById("unchecked-count").innerHTML=checks;
}


function deleteAllTodo() {

	var li = document.getElementsByTagName("li");
	var j = 0;

	for(var i=0; i<lists; i++){
	
		document.getElementById("todo-list").removeChild(li[j]);
	}

	lists=0;
	checks=0;

	document.getElementById("item-count").innerHTML=lists;
	document.getElementById("unchecked-count").innerHTML=checks;
}

function deleteTodo() {

	var li = document.getElementsByTagName("li");
	var j = 0;

	document.getElementById("todo-list").removeChild(li[j]);

	updateCounter();
   
	lists = lists - 1;

	checks = lists;

	document.getElementById("item-count").innerHTML = lists;
	document.getElementById("unchecked-count").innerHTML = checks;

}

