var slideshow = {
  timer: null,
  nodes: {
    image: null,
    caption: null,
  },
  images: {
    cache: [],
    counter: 0,
  },
  play: true,
  speed: 2000,
  loadImages: function (slides) {
    var image;
    for (var i in slides) {
      // preload images, copy title and save in array
      image = new Image();
      image.src = slides[i].href;
      image.title = slides[i].title;
      this.images.cache.push(image);
    }
    return this;
  },
  startSlideshow: function () {
    if (arguments.length === 2) {
      this.nodes.image = arguments[0];
      this.nodes.caption = arguments[1];
    }
    this.timer = setInterval(this.displayNextImage.bind(this), this.speed);
    return this;
  },
  stopSlideshow: function () {
    clearInterval(this.timer);
    return this;
  },
  displayNextImage: function () {
    this.images.counter = ++this.images.counter % this.images.cache.length;
    var image = this.images.cache[this.images.counter];
    this.nodes.image.src = image.src;
    this.nodes.caption.firstChild.nodeValue = image.title;
  },
  setPlayText: function (a) {
    a.innerHTML = this.play ? "Pause" : "Resume";
    return this;
  },
  togglePlay: function (e) {
    if (slideshow.play) {
      slideshow.stopSlideshow();
    } else {
      slideshow.startSlideshow();
    }
    slideshow.play = !slideshow.play; //toggle flag
    slideshow.setPlayText(this); // reset play text
    evt.preventDefault(e);
  },
};
