var toDoList = document.getElementById('todo-list');
var doneList = document.getElementById('done-list');
var boxElement = document.getElementsByClassName('box')[0];


function clickHandler(){
	var addText = document.getElementById('add').value;
	if(addText){
		createNew(addText);	
	}else{
		alert('skriv in något i inputfältet');
	}	
}

var fileId = 0;

function createNew(addText){
	
	var toDoText = document.createTextNode(addText); 
	var toDoItem = document.createElement('li');
	toDoList.appendChild(toDoItem);
	toDoItem.appendChild(toDoText);
	toDoItem.setAttribute('id', fileId);

	var finishButton = document.createElement('button');
	finishButton.textContent = 'Done';
	toDoItem.appendChild(finishButton);
	
	var deleteButton = document.createElement('button');
	deleteButton.textContent = "Delete";  
	toDoItem.appendChild(deleteButton);	
	deleteButton.onclick = deleteItem;
		
	fileId++;
}	

function deleteItem(event){ 
	var deleteButton = event.target;
	var listItem = deleteButton.parentElement;
	var toDoList = listItem.parentElement;
	toDoList.removeChild(listItem);
}

// function doneItem(){
// 	//lägg till raden till doneList
// }