var taskList = {
  tasks: [],
  storage: getTaskStorage("tasks"), // create a instance of storage
  displayDiv: null,
  deleteClickHandler: null,
  load: function () {
    if (this.tasks.length == 0) {
      this.tasks = this.storage.get();
    }
    return this;
  },
  save: function () {
    this.storage.set(this.tasks);
    return this;
  },
  sort: function () {
    this.tasks.sort();
    return this;
  },
  add: function (task) {
    this.tasks.push(task.toString());
    return this;
  },
  delete: function (i) {
    this.sort();
    this.tasks.splice(i, 1);
    return this;
  },
  clear: function () {
    this.tasks.length = 0;
    this.storage.clear();
    this.displayDiv.innerHTML = "";
    return this;
  },
  display: function () {
    var html = "";
    this.sort();
    // build task list to display
    for (var i in this.tasks) {
      html = html.concat("<p>");
      html = html.concat("<a href='#' id='", i, "'>Delete</a>");
      html = html.concat(this.tasks[i]);
      html = html.concat("</p>");
    }
    this.displayDiv.innerHTML = html;

    // add delete handler to delete link
    var links = this.displayDiv.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      links[i].onclick = this.deleteClickHandler;
    }

    return this;
  },
};
