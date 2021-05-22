function $(id) {
  return document.getElementById(id);
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function joinListHandler() {
  var email = $("email").value;
  var email2 = $("email2").value;
  var firstName = $("first_name").value;
  var isValid = true;

  // validation for email
  if (email == "") {
    $("email_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else {
    isValid = validateEmail(email);
    if (!isValid) {
      $("email_error").firstChild.nodeValue = "Email is not valid.";
    } else {
      $("email_error").firstChild.nodeValue = "";
    }
  }

  // validation for email2
  if (email2 == "") {
    $("email2_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else if (email2 != email) {
    $("email2_error").firstChild.nodeValue = "This entry must equal first entry.";
    isValid = false;
  } else {
    $("email2_error").firstChild.nodeValue = "";
  }

  // validation for first name
  if (firstName == "") {
    $("first_name_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
  } else {
    $("first_name_error").firstChild.nodeValue = "";
  }

  if (isValid) {
    // submit form
    $("email_form").submit();
  }
}

window.onload = function () {
  $("join_list").onclick = joinListHandler;
  $("email").focus();
};
