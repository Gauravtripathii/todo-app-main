var all_btn = document.querySelector(".all");
var active = document.querySelector(".active");
var completed = document.querySelector(".completed");

function show_completed_todo(v) {
  var li = document.createElement("LI");
  var span = document.createElement("SPAN");
  var span2 = document.createElement("SPAN");
  span.appendChild(document.createTextNode(v));
  span2.appendChild(document.createTextNode("X"));
  span2.className = "cross";
  li.appendChild(span);
  li.appendChild(span2);
  li.className = "checked";
  todos_container.appendChild(li);
}

function show_active_todo(v) {
  var li = document.createElement("LI");
  var span = document.createElement("SPAN");
  var span2 = document.createElement("SPAN");
  span.appendChild(document.createTextNode(v));
  span2.appendChild(document.createTextNode("X"));
  span2.className = "cross";
  li.appendChild(span);
  li.appendChild(span2);
  todos_container.appendChild(li);
}

function show_all_todo(v) {
  var li = document.createElement("LI");
  var span = document.createElement("SPAN");
  var span2 = document.createElement("SPAN");
  span.appendChild(document.createTextNode(v));
  span2.appendChild(document.createTextNode("X"));
  span2.className = "cross";
  li.appendChild(span);
  li.appendChild(span2);
  if (todos[v] === true) {
    li.className = "checked";
  }
  todos_container.appendChild(li);
}

completed.addEventListener("click", function () {
  var completed_todos = Object.keys(todos).filter(function (v) {
    return todos[v] == true;
  });
  var pre_li = document.getElementsByTagName("LI");
  for (var i = 0; i < pre_li.length; i++) {
    pre_li[i].style.display = "none";
  }
  for (var i = 0; i < completed_todos.length; i++) {
    show_completed_todo(completed_todos[i]);
  }
});

all_btn.addEventListener("click", function () {
  var pre_li = document.getElementsByTagName("LI");
  for (var i = 0; i < pre_li.length; i++) {
    pre_li[i].style.display = "none";
  }
  for (var i = 0; i < Object.keys(todos).length; i++) {
    show_all_todo(Object.keys(todos)[i]);
  }
});

active.addEventListener("click", function () {
  var completed_todos = Object.keys(todos).filter(function (v) {
    return todos[v] == false;
  });
  var pre_li = document.getElementsByTagName("LI");
  for (var i = 0; i < pre_li.length; i++) {
    pre_li[i].style.display = "none";
  }
  for (var i = 0; i < completed_todos.length; i++) {
    show_active_todo(completed_todos[i]);
  }
});
