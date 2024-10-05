const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value;
    if (taskText !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        newTask.addEventListener("click", () => {
            newTask.classList.toggle("completed");
        });
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
});