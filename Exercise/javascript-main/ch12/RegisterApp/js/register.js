var registrationForm;

window.onload = function () {
  // create validation object and set field messages
  registrationForm = new RegistrationForm();
  registrationForm.resetForm();
  // create and attach event handler
  $("register").onclick = function () {
    if (registrationForm.validateForm()) {
      $("registration_form").submit();
    }
  };
  $("reset_form").onclick = function () {
    registrationForm.resetForm();
  };
};
