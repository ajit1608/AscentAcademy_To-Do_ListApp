let taskList = document.getElementById("task-list");

function addTask() {
	let inputBox = document.getElementById("input-box");
	if (inputBox.value !== "") {
		let taskItem = document.createElement("li");
		taskItem.innerHTML = inputBox.value;
		taskList.appendChild(taskItem);
		inputBox.value = "";
	}
}
function deleteTask() {
	let inputBox = document.getElementById("input-box");
	if (inputBox.value !== "") {
		let taskItem = document.createElement("li");
		taskItem.innerHTML = inputBox.value;
		taskList.appendChild(taskItem);
		inputBox.value = "";
	}
}
