// augment the slideshow object using module pattern
(function (mod) {
  mod.changeSpeed = function (speed) {
    var newSpeed = parseInt(speed);
    this.speed = isNaN(newSpeed) || newSpeed < 200 ? 2000 : newSpeed;
    return this;
  };
})(myapp.slideshow);
