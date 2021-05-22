"use strict";

function $(id) {
  return document.getElementById(id);
}

var processEntry = function () {
  var miles = parseFloat($("miles").value);
  var gallons = parseFloat($("gallons").value);

  // calculate
  if (isNaN(miles) || isNaN(gallons)) {
    alert("One or both entries are invalid");
  } else {
    calculate(miles, gallons);
  }
};

var calculate = function (miles, gallons) {
  var mpg = miles / gallons;
  mpg = mpg.toFixed(1);
  $("mpg_result").value = mpg;
};

window.onload = function () {
  $("calculate").onclick = processEntry;
  $("miles").focus();
};
