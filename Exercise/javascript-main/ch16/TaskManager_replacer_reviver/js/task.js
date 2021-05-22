"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
var tasks = [];

var displayTaskList = function () {
  // get in storage
  tasks = getTasks();

  // display tasks string and set focus on task text box
  $("task_list").value = tasks.display ? tasks.display : "";
  $("task").focus();
};

var addToTaskList = function () {
  var task = $("task").value;
  var taskDate = $("task_date").value;
  var d = new Date(taskDate);

  if (task === "" || d === "" || d.toString() == "Invalid Date") {
    alert("Please enter a task and date");
  } else {
    // add task to localstorage and tasks array
    tasks.push({ task: task, date: d });
    setTasks(tasks);

    // clear task list text and re-display tasks
    $("task").value = "";
    $("task_date").value = "";
    displayTaskList();
  }
};

var clearTaskList = function () {
  tasks.length = 0;
  clearTasks();
  $("task_list").value = "";
  $("task").focus();
};

window.onload = function () {
  $("add_task").onclick = addToTaskList;
  $("clear_tasks").onclick = clearTaskList;
  displayTaskList();
};
