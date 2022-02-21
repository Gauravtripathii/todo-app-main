var input_todo = document.querySelector(".todo-input-box");

// console.log(input_todo);

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    todos[input_todo.value] = false;
    input_todo.value = '';
  }
});
