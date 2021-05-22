// constructor function
var Task = function (task) {
  this.text = task;
};

Task.prototype.isValid = function () {
  if (this.text === "") return false;
  return true;
};

Task.prototype.toString = function () {
  // capitalize the first letter
  var firstLetter = this.text.substring(0, 1);
  return firstLetter.toUpperCase() + this.text.substring(1);
};
