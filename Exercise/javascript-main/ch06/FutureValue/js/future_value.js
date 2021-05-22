"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var processEntries = function () {
  // get user entries
  var investment = parseFloat($("investment").value);
  var rate = parseFloat($("rate").value);
  var years = parseInt($("years").value);

  // validate data
  if (isNaN(investment) || investment <= 0 || isNaN(rate) || rate <= 0 || isNaN(years) || years <= 0) {
    alert("Please enter valid entries");
  } else {
    $("result").value = calculate(investment, rate, years).toFixed(2);
  }
};

// calulate future value
var calculate = function (investment, rate, years) {
  var futureValue = investment;
  for (var i = 1; i <= years; i++) {
    futureValue = futureValue + (futureValue * rate) / 100;
  }
  return parseInt(futureValue);
};

window.onload = function () {
  $("calculate").onclick = processEntries;
  $("investment").focus();
};
