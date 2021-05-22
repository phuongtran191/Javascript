"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var addToTaskList = function () {
  var taskTextbox = $("task");
  var newTask = new Task(taskTextbox.value);
  if (newTask.isValid()) {
    // add task to tasklist
    taskList.add(newTask);
    // save task list to local storage
    taskList.save();
    // display tasklist on view
    taskList.display();
    // reset task textbox
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
  taskList.delete(this.id); // this => clicked link
  taskList.save();
  taskList.display();
  $("task").focus();
};

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;

  // set value for tasklist properties
  taskList.displayDiv = $("tasks");
  taskList.deleteClickHandler = deleteFromTaskList;

  // load tasks and display
  taskList.load();
  taskList.display();
  $("task").focus();
};
