var input_box = document.querySelector(".todo-input-box");

var todos_container = document.querySelector(".todos-list-container");
function create_todo(v) {
  var li = document.createElement("LI");
  var span = document.createElement("SPAN");
  var span2 = document.createElement("SPAN");
  span.appendChild(document.createTextNode(v));
  span2.appendChild(document.createTextNode("X"));
  span2.className = "cross";
  li.appendChild(span);
  li.appendChild(span2);
  todos_container.appendChild(li);
  todos[input_box.value] = false;
  input_box.value = "";
}

var close_btn = document.querySelector(".cross");
console.log(close_btn);

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      todos[ev.target.textContent.slice(0, -1)] = true;
    }
  },
  false
);

input_box.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    create_todo(input_box.value);
  }
});
