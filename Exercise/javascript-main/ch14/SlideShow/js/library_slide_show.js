var createSlideshow = function () {
  // private variable and function
  var timer,
    play = true,
    speed = 2000;
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
      timer = setInterval(displayNextImage, speed);
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
};
