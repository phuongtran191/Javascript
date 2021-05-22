var getStorageItem = function (key) {
  var storageItem = localStorage.getItem(key) || "";
  if (storageItem === "") {
    return [];
  }

  return storageItem.split("|");
};

var setStorageItem = function (key, value) {
  if (Array.isArray(value)) {
    localStorage.setItem(key, value.join("|"));
  } else {
    localStorage.setItem(key, value);
  }
};

var clearStorageItem = function (key) {
  localStorage.removeItem(key);
};
