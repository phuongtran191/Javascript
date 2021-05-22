"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

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

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;

  // set value for tasklist properties
  taskList.displayDiv = $("tasks");
  taskList.deleteClickHandler = deleteFromTaskList;

  // load tasks and display
  taskList.load().display();
  $("task").focus();
};
