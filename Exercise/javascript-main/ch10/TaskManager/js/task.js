"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var tasks = [];
var TASKS = "tasks";

var displayTaskList = function () {
  var list = ""; // contains task list
  if (tasks.length === 0) {
    // get in storage
    tasks = getStorageItem(TASKS);
  }

  // sort and display tasks
  if (tasks.length > 0) {
    displaySortedTaskList(tasks, $("tasks"), deleteFromTaskList);
  }
};

var addToTaskList = function () {
  var task = $("task").value;
  if (task === "") {
    alert("Please enter a task");
  } else {
    // add task to tasks array
    tasks.push(capitalizeTask(task));
    // update local storage
    setStorageItem(TASKS, tasks);
    // re-display tasks
    displayTaskList();
    // clear task list text
    $("task").value = "";
  }
};

var clearTaskList = function () {
  // clear task array
  tasks.length = 0;
  // clear storage
  clearStorageItem(TASKS);
  // clear UI
  $("tasks").innerHTML = "";
  $("task").focus();
};

var deleteFromTaskList = function () {
  // remove item out of tasks
  deleteTask(tasks, this.id); // this => clicked link
  // update storage
  setStorageItem(TASKS, tasks);
  // re-display tasks
  displayTaskList();
  $("task").focus();
};

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;

  // display tasks string and set focus on task text box
  displayTaskList();
  $("task").focus();
};
