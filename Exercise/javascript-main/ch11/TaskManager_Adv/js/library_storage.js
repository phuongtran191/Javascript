// localStoragePrototype give a lot of coding flexibility
// this prototype as a base local storage
// and can use for many types of data as array of array, array of object...
var localStoragePrototype = {
  get: function () {
    return localStorage.getItem(this.key);
  },
  set: function (value) {
    localStorage.setItem(this.key, value);
  },
  clear: function () {
    localStorage.setItem(this.key, "");
  },
};

// string prototype inherit from localStoragePrototype
var stringArrayStoragePrototype = Object.create(localStoragePrototype);

// override get method of local storage prototype
stringArrayStoragePrototype.get = function () {
  var str = localStoragePrototype.get.call(this) || "";
  return str !== "" ? str.split("|") : [];
};

// override set method of local storage prototype
stringArrayStoragePrototype.set = function (arr) {
  if (Array.isArray(arr)) {
    localStoragePrototype.set.call(this, arr.join("|"));
  }
};

// factory function to create a new storage instance
var getTaskStorage = function (key) {
  var storage = Object.create(stringArrayStoragePrototype);
  storage.key = key;
  return storage;
};
