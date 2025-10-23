const todoList = document.getElementById("todos");
const addTask = document.getElementById("input");
const button = document.getElementById("addBtn");

button.addEventListener("click", function () {
  const task = addTask.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.textContent = task;

  li.addEventListener("click", () => li.classList.toggle("done"));

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(removeBtn);
  todoList.appendChild(li);
  addTask.value = "";
});
