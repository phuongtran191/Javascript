"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var slideShow = function () {
  var listNode = $("image_list");
  var imageNode = $("image");
  var captionNode = $("caption");
  var image;

  // get all images
  var links = listNode.getElementsByTagName("a");

  //save images to cache
  var imageCache = [];
  for (var i = 0; i < links.length; i++) {
    var linkItem = links[i];

    // preload image and copy title property
    image = new Image();
    image.src = linkItem.getAttribute("href");
    image.title = linkItem.getAttribute("title");
    imageCache[imageCache.length] = image;
  }

  // start slide show
  var imageCounter = 0;
  var timer = setInterval(function () {
    imageCounter = (imageCounter + 1) % imageCache.length;
    image = imageCache[imageCounter];
    imageNode.src = image.src;
    captionNode.firstChild.nodeValue = image.title;
  }, 2000);
};

window.onload = function () {
  slideShow();
};
