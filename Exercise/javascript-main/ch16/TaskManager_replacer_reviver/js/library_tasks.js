var getTasks = function () {
  var reviver = function (key, value) {
    if (key === "") {
      // value is object is returned
      // sort task by date
      value.sort(function (a, b) {
        return a.date - b.date;
      });

      // display string
      value.display = value.reduce(function (preValue, value) {
        return preValue.concat(value.date.short, " - ", value.task, "\n");
      }, "");

      return value;
    } else {
      var dt = new Date(value);
      if (dt.toString() === "Invalid Date") {
        return value;
      } else {
        var m = dt.getMonth() + 1;
        dt.short = m + "/" + dt.getDate() + "/" + dt.getFullYear();
        return dt;
      }
    }
  };

  var storage = localStorage.getItem("tasks") || "";
  return storage === "" ? [] : JSON.parse(storage, reviver);
};

var setTasks = function (tasks) {
  var replacer = function (key, value) {
    if (key === "") return value;
    if (typeof value === "string") {
      var first = value.substring(0, 1).toUpperCase();
      return first + value.substring(1);
    } else {
      return value;
    }
  };
  var json = JSON.stringify(tasks, replacer);
  localStorage.setItem("tasks", json);
};

var clearTasks = function () {
  localStorage.setItem("tasks", "");
};
