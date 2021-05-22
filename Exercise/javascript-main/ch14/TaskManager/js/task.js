"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var taskList;

var addToTaskList = function () {
  var taskTextbox = $("task");
  var newTask = new Task(taskTextbox.value);
  if (newTask.isValid()) {
    // add task to tasklist
    // then save task list to local storage
    // then display tasklist on view
    taskList.add(newTask).save().display();
    taskTextbox.value = "";
  } else {
    alert("Please enter a task");
  }
  taskTextbox.focus();
};

var clearTaskList = function () {
  taskList.clear();
  $("task").focus();
};

var deleteFromTaskList = function () {
  taskList.delete(this.id).save().display(); // this => clicked link
  $("task").focus();
};

var boldExclamationPoints = function bold(node) {
  // recursion on child node
  if (node.childNodes && node.childNodes.length > 0) {
    for (var i in node.childNodes) {
      var childNode = node.childNodes[i];
      // check element node and text node only
      if (childNode.nodeType === 1 || childNode.nodeType === 3) {
        bold(node.childNodes[i]);
      }
    }
  } else {
    // base case: bold text if contains ! character
    if (node.nodeValue && node.nodeValue.indexOf("!") > -1) {
      var span = node.parentNode;
      span.innerHTML = "<b>" + node.nodeValue + "</b>";
    }
  }
};

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;
  $("bold").onclick = function () {
    boldExclamationPoints($("tasks"));
  };

  taskList = createTaskList($("tasks"), deleteFromTaskList);

  // load tasks and display
  taskList.load().display();
  $("task").focus();
};
