"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

window.onload = function () {
  var slides = [
    { href: "images/gear.jpg", title: "Fishing Gear" },
    { href: "images/plane.jpg", title: "Bush Plane" },
    { href: "images/release.jpg", title: "Catch and Release" },
    { href: "images/lunch.jpg", title: "Streamside Lunch" },
    { href: "images/dusk.jpg", title: "Day's End" },
  ];
  var slideshow = createSlideshow();
  slideshow.loadImages(slides).startSlideshow($("image"), $("caption"));
  $("play_pause").onclick = slideshow.togglePlay();
};
