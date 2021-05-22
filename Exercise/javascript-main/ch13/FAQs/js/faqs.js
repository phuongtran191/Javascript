"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var log = function (e) {
  console.log(e);
};

// the event handler for the click event of each h2 element
var toggle = function () {
  var h2 = this; // this refers to the clicked h2 tag
  var div = h2.nextElementSibling;

  // toggle + and - image by adding or removing class
  if (h2.hasAttribute("class")) {
    h2.removeAttribute("class");
  } else {
    h2.setAttribute("class", "minus");
  }

  // toggle div visibility
  if (div.hasAttribute("class")) {
    div.removeAttribute("class");
  } else {
    div.setAttribute("class", "open");
  }
};

window.onload = function () {
  var faqs = $("faqs");
  var h2Elements = faqs.getElementsByTagName("h2");

  // attach event handler for each h2 tag
  for (var i = 0; i < h2Elements.length; i++) {
    // h2Elements[i].onclick = toggle;
    var h2 = h2Elements[i];
    var a = h2.firstChild;
    evt.attach(h2, "click", toggle);
    // cancel default action of the <a> tag
    evt.attach(a, "click", evt.preventDefault);
    // log events of a tag
    evt.attach(a, "click", log);
    evt.attach(a, "focus", log);
    evt.attach(a, "mouseover", log);
  }

  // set focus on first h2 tag's a tag
  h2Elements[0].firstChild.focus();
};
