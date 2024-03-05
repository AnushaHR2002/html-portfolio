function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);

    taskInput.value = "";

    // Add event listener to remove task when clicked
    li.addEventListener("click", function () {
        this.parentNode.removeChild(this);
    });
}
