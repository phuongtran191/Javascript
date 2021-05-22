var storagePrototype = {
  get: function () {
    var storageItem = localStorage.getItem(this.key) || "";
    return storageItem === "" ? [] : storageItem.split("|");
  },
  set: function (arr) {
    if (Array.isArray(arr)) {
      localStorage.setItem(this.key, arr.join("|"));
    }
  },
  clear: function () {
    localStorage.removeItem(this.key);
  },
};

// factory function to create a storage instance
var getTaskStorage = function (key) {
  var storage = Object.create(storagePrototype);
  storage.key = key;
  return storage;
};
