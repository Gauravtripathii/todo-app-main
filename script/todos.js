var input_todo = document.querySelector(".todo-input-box");

// console.log(input_todo);

var todos_container = document.querySelector(".todos-list-container");












document.addEventListener("keydown", (e) => {
  if (e.code === "Enter" && Object.keys(todos).length <= 6) {
    todos[input_todo.value] = false;
    input_todo.value = "";
  }
});