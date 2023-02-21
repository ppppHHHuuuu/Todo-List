const button = document.getElementById("favoritesButton");
const content = document.getElementById("favorites");

button.onclick = function() {
    if (content.className == "open") {
        content.className = "";
        button.innerHTML = "Close Favorites";
    }
    else {
        content.className = "open";
        button.innerHTML = "Open Favorites";
    }
}

// const rightButton = document.getElementsByClassName("add_task_button");
// const rightContent = document.getElementsByClassName("add_task");

const taskInput = document.querySelector('.add_task');
const taskButton = document.querySelector('.add_task_button');
const list = document.querySelector(".task_list");

taskButton = addEventListener('click', addTask);

function addTask (e) {
    const li = document.createElement("li");
    li.className = "task_item";
    li.textContent = taskInput.value;
    list.appendChild(li);
    taskInput.value = '';
}