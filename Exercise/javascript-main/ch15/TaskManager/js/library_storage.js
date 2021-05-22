myapp.utility.storage.get = function (key) {
  var storageItem = localStorage.getItem(key) || "";
  if (storageItem === "") {
    return [];
  }

  return storageItem.split("|");
};

myapp.utility.storage.set = function (key, value) {
  if (Array.isArray(value)) {
    localStorage.setItem(key, value.join("|"));
  } else {
    localStorage.setItem(key, value);
  }
};

myapp.utility.storage.clear = function (key) {
  localStorage.setItem(key, "");
};
