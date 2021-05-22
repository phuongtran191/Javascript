// create the namespace
var myapp = myapp || {};

// create slideshow module object and add it to the namespace
myapp.slideshow = (function () {
  // private variable and function
  var timer,
    play = true;
  var nodes = {
    image: null,
    caption: null,
  };
  var images = {
    cache: [],
    counter: 0,
  };
  var stopSlideshow = function () {
    clearInterval(timer);
  };
  var displayNextImage = function () {
    images.counter = ++images.counter % images.cache.length;
    var image = images.cache[images.counter];
    nodes.image.src = image.src;
    nodes.caption.firstChild.nodeValue = image.title;
  };
  var setPlayText = function (btn) {
    btn.value = play ? "Pause" : "Resume";
  };

  // public methods that have access to private variables and functions
  return {
    speed: 2000,
    loadImages: function (slides) {
      var image;
      for (var i in slides) {
        // preload images, copy title and save in array
        image = new Image();
        image.src = slides[i].href;
        image.title = slides[i].title;
        images.cache.push(image);
      }
      return this;
    },
    startSlideshow: function () {
      if (arguments.length === 2) {
        nodes.image = arguments[0];
        nodes.caption = arguments[1];
      }
      // stop any currently running slideshow
      stopSlideshow();
      timer = setInterval(displayNextImage, this.speed);
      return this;
    },

    togglePlay: function () {
      var that = this;
      return function () {
        if (play) {
          stopSlideshow();
        } else {
          that.startSlideshow();
        }
        play = !play; //toggle flag
        setPlayText(this); // reset play text button
      };
    },
  };
})(); // invoke IIFE to create the slideshow module object
