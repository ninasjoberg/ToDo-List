//Tar in elemet som jag skapat i min html-fil. 
var toDoList = document.getElementById('todo-list');
var doneList = document.getElementById('done-list');
var valueInput = document.getElementById('add');

//Nedan funktion anropas om man klickar på knappen "create". onClick inlagt i html-filen.
//Funktionen kollar om det finns någon text inskriven i inputfältet. I så fall anropas 
//funktionen createNew och inputfältet sätts sedan till en tom sträng.
//Om inget står i inputfältet när knappen trycks på visas en ruta med ett meddelande som ber 
//användaren att skriva in något i inputfältet. 
function clickHandler(){
	var addText = valueInput.value;
	if(addText){
		createNew(addText);	
		valueInput.value = '';
	}else{
		alert('Write something in the input field.');
	}	
}

//Funktion som skapar en ny textnode av det som skrivits in i inputfältet. Textnoden läggs i en 
//ny div i ett nytt list-item. Sedan anropas två funktioner för att skapa tillhörande knappar. 
function createNew(addText){
	var toDoText = document.createTextNode(addText);
	var textDiv = document.createElement('div'); 
	var toDoItem = document.createElement('li');
	textDiv.appendChild(toDoText);
	toDoItem.appendChild(textDiv);
	toDoList.appendChild(toDoItem);
	createButton(toDoItem, 'Done', doneItem);
	createButton(toDoItem, 'Delete', deleteItem);
}	

//Funktion som skapar knapparna Done och Delete, argumenten för de olika knapparna är olika och 
//skickas med i föregånede funktion. Knapparna sätts som child till samma element som diven till texten 
//i föregånde funktion, dvs child till toDoItem som skickas med som argument för parent. 
//En onclick som är lika med en funktion sätts till knappen. Argument för vilken funktion som ska sättas 
//lika med onclick har kickats med som tredje argument: clickfn. 
function createButton(parent, type, clickfn){
	var button = document.createElement('button');
	button.textContent = type;
	button.setAttribute('class', 'button' + type);
	parent.appendChild(button);
	button.onclick = clickfn;
}

//Funktion som tar bort hela list-item, dvs texten, och de båda knapparna när man trycker på Deleteknappen. 
function deleteItem(event){ 
	var deleteButton = event.target;
	var listItem = deleteButton.parentElement;
	var toDoList = listItem.parentElement;
	toDoList.removeChild(listItem);
}

//Funktion som lägger till hela list-item och de båda knapparna till listan "done" för att sedan radera
//knappen done. 
function doneItem(event){
	var doneButton = event.target;
	var listItem = doneButton.parentElement;
	var toDoList = listItem.parentElement;
	doneList.appendChild(listItem);
	listItem.removeChild(doneButton);
}







