var createTaskList = function (displayDiv, deleteClickHandler) {
  // private variable and function
  var tasks = [];
  var storage = getStorage("tasks"); // create a instance of storage

  var sort = function () {
    tasks.sort();
  };

  // private callback function
  var getTasks = function (storageString) {
    return storageString === "" ? [] : storageString.split("|");
  };
  var setTasks = function (arr) {
    return Array.isArray(arr) ? arr.join("|") : arr;
  };

  // public methods that have access to private variables and methods
  return {
    load: function () {
      if (tasks.length == 0) {
        tasks = storage.get(getTasks);
      }
      return this;
    },
    save: function () {
      storage.set(tasks, setTasks);
      return this;
    },
    add: function (task) {
      tasks.push(task.toString());
      return this;
    },
    // delete task at index i
    delete: function (i) {
      sort();
      tasks.splice(i, 1);
      return this;
    },
    clear: function () {
      tasks.length = 0;
      storage.clear();
      displayDiv.innerHTML = "";
      return this;
    },
    display: function () {
      var html = "";
      sort();
      // build task list to display
      for (var i in tasks) {
        html = html.concat("<p>");
        html = html.concat("<a href='#' id='", i, "'>Delete</a>");
        html = html.concat("<span> " + tasks[i] + "</span>");
        html = html.concat("</p>");
      }
      displayDiv.innerHTML = html;

      // add delete handler to delete link
      var links = displayDiv.getElementsByTagName("a");
      for (var i = 0; i < links.length; i++) {
        links[i].onclick = deleteClickHandler;
      }

      return this;
    },
  };
};
