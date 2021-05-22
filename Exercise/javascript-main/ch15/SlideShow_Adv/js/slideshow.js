"use strict";

window.onload = function () {
  var $ = function (id) {
    return document.getElementById(id);
  };
  // create slideshow and start slideshow
  var slides = [
    { href: "images/gear.jpg", title: "Fishing Gear" },
    { href: "images/plane.jpg", title: "Bush Plane" },
    { href: "images/release.jpg", title: "Catch and Release" },
    { href: "images/lunch.jpg", title: "Streamside Lunch" },
    { href: "images/dusk.jpg", title: "Day's End" },
  ];

  myapp.slideshow.loadImages(slides).startSlideshow($("image"), $("caption"));
  $("play_pause").onclick = myapp.slideshow.togglePlay();
  $("change_speed").onclick = function () {
    var msg = "Current speed is ".concat(
      myapp.slideshow.slideShowSpeed,
      " milliseconds.\n",
      "Please enter a new speed in milliseconds (200 min).",
    );
    var ms = prompt(msg, 2000);
    myapp.slideshow.changeSpeed(ms).startSlideshow();
  };
};
