var Task = function (task, date) {
  this.task = task;
  this.date = date;
};

// custom output for json object
Task.prototype.toJSON = function () {
  // get date part
  var m = this.date.getMonth() + 1;
  var d = this.date.getDate();
  var y = this.date.getFullYear();

  // upper case first character of task
  var first = this.task.substring(0, 1).toUpperCase();
  var remain = this.task.substring(1);

  return m + "/" + d + "/" + y + " - " + first + remain;
};
