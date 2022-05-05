const taskInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

tasksAdd.addEventListener("click", function (event) {
  event.preventDefault();

  if (taskInput.value.trim() === "") return;

  tasksList.innerHTML += `
    <div class="task">
        <div class="task__title">
            ${taskInput.value}
        </div>
        <a href="#" class="task__remove" onclick="this.closest('.task').outerHTML = '';">&times;</a>
    </div>        
    `;

  taskInput.value = "";
});
