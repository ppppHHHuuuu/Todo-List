const buttonFavorites = document.getElementById("favoritesButton");
const contentFavorites = document.getElementById("favorites");

buttonFavorites.onclick = function() {
    if (contentFavorites.className == "open") {
        contentFavorites.className = "";
        buttonFavorites.innerHTML = "Close Favorites";
    }
    else {
        contentFavorites.className = "open";
        buttonFavorites.innerHTML = "Open Favorites";
    }
}

const buttonPersonal = document.getElementById("personalButton");
const contentPersonal = document.getElementById("personalSpace");

buttonPersonal.addEventListener("click", () => {
    if (contentPersonal.className == "open") {
        contentPersonal.className = "";
        buttonPersonal.innerHTML = "Close Personal";
    }
    else {
        contentPersonal.className = "open";
        buttonPersonal.innerHTML = "Open Personal";
    }
})

const buttonWork = document.getElementById("workButton");
const contentWork = document.getElementById("workSpace");

buttonWork.addEventListener("click", () => {
    if (contentWork.className == "open") {
        contentWork.className = "";
        buttonWork.innerHTML = "Close Personal";
    }
    else {
        contentWork.className = "open";
        buttonWork.innerHTML = "Open Personal";
    }
})


let taskInput = document.querySelector('.add_task');
let taskButton = document.querySelector('.add_task_button');
let list = document.querySelector(".task_list");

taskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', addTaskByEnter);
function addTaskByEnter(e) {
    if (e.keyCode == 13) {
        addTask();
    }
}
function addTask (e) {
    console.log(e);
    const li = document.createElement("li");
    li.className = "task_item";
    li.textContent = taskInput.value;
    if (li.textContent == null || li.textContent == "") {
        return;
    }
    list.appendChild(li);
    taskInput.value = '';
    li.addEventListener('click', () => {
        list.removeChild(li);console.log(list.childElementCount);
        updateTodayTasks();
    })
    updateTodayTasks();
}

let countToday = document.getElementById('today_count');

function updateTodayTasks (e) {
   countToday = list.childElementCount; 
   console.log(countToday);
   document.getElementById('today_count').innerHTML = countToday;
}
// let deleteButton = document.querySelector(".remove_button");
// deleteButton.addEventListener("click", deleteTask);
// function deleteTask (e) {
//     let task = document.querySelector(".task_item");
//     if (task){
//         task.addEventListener("click", check);
//         alert("task is okay");
//         console.log(task);
//     }
//     if (task == null) {
//         console.log("nothing here");
//     }
// }

// function check (e) {
//     list.parentElement.removeChild(list.firstChild);
//     e.preventDefault();
// }
// 
// task.addEventListener("click", deleteTask);
// function deleteTask(e) {
//     list.remove(list.lastChild);
//     console.log(54);
// }



// list.addEventListener("click", deleteTask);
// function deleteTask(e) {
//     const listLi = document.getElementsByClassName('task_list');
//     listLi.remove();
// }