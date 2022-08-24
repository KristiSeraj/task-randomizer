let myTasks = document.getElementById("task");
let myList = document.getElementById("listTask");

function addNewTask() {
	let myListChild = document.createElement("li");
	myListChild.appendChild(myTasks);
	myList.appendChild(myListChild);
}