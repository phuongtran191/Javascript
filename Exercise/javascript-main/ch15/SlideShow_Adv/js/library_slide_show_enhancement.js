// augment the slideshow object using module pattern
(function (mod) {
  mod.changeSpeed = function (speed) {
    this.slideShowSpeed = speed;
    return this;
  };
})(myapp.slideshow);
