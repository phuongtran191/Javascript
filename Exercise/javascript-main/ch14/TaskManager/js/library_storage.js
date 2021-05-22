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
var storagePrototype = Object.create(localStoragePrototype);

// override get method of local storage prototype
// using callback function to determine their inner workings
storagePrototype.get = function (callback) {
  var value = localStoragePrototype.get.call(this);
  if (callback && typeof callback === "function") {
    return callback(value);
  }
  return value;
};

// override set method of local storage prototype
storagePrototype.set = function (value, callback) {
  var strValue = value.toString();
  if (callback && typeof callback === "function") {
    strValue = callback(value);
  }
  // set to storage
  localStoragePrototype.set.call(this, strValue);
};

// factory function to create a new storage instance
var getStorage = function (key) {
  var storage = Object.create(storagePrototype);
  storage.key = key;
  return storage;
};
