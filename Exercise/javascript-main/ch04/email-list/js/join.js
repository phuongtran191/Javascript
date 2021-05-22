function $(id) {
  return document.getElementById(id);
}

function setFirstName() {
  var urlString = window.location.href;
  var url = new URL(urlString);
  var firstName = url.searchParams.get("first_name");
  $("first_name").innerHTML = firstName;
}

window.onload = function () {
  setFirstName();
};
