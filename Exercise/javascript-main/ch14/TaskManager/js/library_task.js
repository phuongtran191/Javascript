// Task is new object
var Task = function (task) {
  this.text = task;
};

Task.prototype.isValid = function () {
  if (this.text === "") return false;
  return true;
};

Task.prototype.toString = function () {
  // capitalize the first letter
  return this.text.capitalize();
};
