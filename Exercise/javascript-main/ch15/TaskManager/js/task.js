"use strict";
myapp.utility.$ = function (id) {
  return document.getElementById(id);
};

(function () {
  var tasks = [];
  var TASKS = "tasks";

  // create alias
  var tasklist = myapp.tasklist;
  var u = myapp.utility;

  var displayTaskList = function () {
    if (tasks.length === 0) {
      // get in storage
      tasks = u.storage.get(TASKS);
    }

    // sort and display tasks
    if (tasks.length > 0) {
      tasklist.displaySortedTaskList(tasks, u.$("tasks"), deleteFromTaskList);
    }
  };

  var addToTaskList = function () {
    var task = u.$("task").value;
    if (task === "") {
      alert("Please enter a task");
    } else {
      // add task to tasks array
      tasks.push(tasklist.capitalizeTask(task));
      // update local storage
      u.storage.set(TASKS, tasks);
      // re-display tasks
      displayTaskList();
      // clear task list text
      u.$("task").value = "";
    }
  };

  var clearTaskList = function () {
    // clear task array
    tasks.length = 0;
    // clear storage
    u.storage.clear(TASKS);
    // clear UI
    u.$("tasks").innerHTML = "";
    u.$("task").focus();
  };

  var deleteFromTaskList = function () {
    // remove item out of tasks
    tasklist.deleteTask(tasks, this.id); // this => clicked link
    // update storage
    u.storage.set(TASKS, tasks);
    // re-display tasks
    displayTaskList();
    u.$("task").focus();
  };

  window.onload = function () {
    u.$("add_task").onclick = addToTaskList;
    u.$("clear_tasks").onclick = clearTaskList;

    // display tasks string and set focus on task text box
    displayTaskList();
    u.$("task").focus();
  };
})(); // IIFE
