"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var calculateDays = function (event, date) {
  var today = new Date();
  var oneDay = 24 * 60 * 60 * 1000; // miliseconds in one day
  var days = Math.ceil((date.getTime() - today.getTime()) / oneDay);

  if (days == 0) {
    message.innerHTML = "Hooray! Today is ".concat(event.toLowerCase(), "! (", date.toDateString(), ")");
  } else if (days < 0) {
    // capitalize event
    event = event.substring(0, 1).toUpperCase() + event.substring(1);
    message.innerHTML = event.concat(" happened ", Math.abs(days), " day(s) ago. (", date.toDateString(), ")");
  } else {
    message.innerHTML = days.toString().concat(" day(s) until ", event.toLowerCase(), "! (", date.toDateString(), ")");
  }
};

var processEntries = function () {
  // get value
  var event = $("event").value;
  var dt = $("date").value;
  var message = $("message");

  if (event.length == 0 || dt.length == 0) {
    message.innerHTML = "Please enter both a name and a date.";
    return;
  }

  // make sure event date is valid
  if (dt.indexOf("/") == -1) {
    message.innerHTML = "Please enter the date in MM/DD/YYYY format.";
    return;
  }

  var year = dt.substring(dt.length - 4);
  if (isNaN(year)) {
    message.innerHTML = "Please enter the date in MM/DD/YYYY format.";
    return;
  }

  var date = new Date(dt);
  if (date == "Invalid Date") {
    message.innerHTML = "Please enter the date in MM/DD/YYYY format.";
    return;
  }

  calculateDays(event, date);
};

window.onload = function () {
  $("countdown").onclick = processEntries;
  $("event").focus();
};
