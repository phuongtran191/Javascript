"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var calculateDiscountPercent = function (customerType, subtotal) {
  var discountPercent = 0;
  switch (customerType) {
    case "regular": {
      if (subtotal < 100) {
        discountPercent = 0;
      } else if (subtotal >= 100 && subtotal < 250) {
        discountPercent = 0.1;
      } else if (subtotal >= 250 && subtotal < 500) {
        discountPercent = 0.25;
      } else if (subtotal >= 500) {
        discountPercent = 0.3;
      }
      break;
    }
    case "loyalty": {
      discountPercent = 0.3;
      break;
    }
    case "honor": {
      discountPercent = subtotal < 500 ? 0.4 : 0.5;
      break;
    }
  }
  return discountPercent;
};

var processEntries = function () {
  // get value
  var type = $("type").value;
  var subtotal = parseFloat($("subtotal").value);
  if (isNaN(subtotal)) {
    alert("Please enter valid subtotal value!");
    return;
  }
  var discountPercent = calculateDiscountPercent(type, subtotal);

  // set value for UI
  $("subtotal").value = subtotal.toFixed(2);
  $("percent").value = (discountPercent * 100).toFixed(2);
  $("amount").value = (subtotal * discountPercent).toFixed(2);
  $("total").value = (subtotal - subtotal * discountPercent).toFixed(2);

  $("type").focus();
};

window.onload = function () {
  //1. attach event handler for Calculate button
  $("calculate").onclick = processEntries;
  $("type").focus();
};
