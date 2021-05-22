var RegistrationForm = function () {};

RegistrationForm.prototype = new Validate();

RegistrationForm.prototype.validateField = function (fieldName, text) {
  var field = fields[fieldName];
  if (field.required) {
    if (this.isBlank(text)) {
      throw new Error(field.required);
    }
  }
  if (field.noMatch) {
    if (!this.isMatch(text, $(field.noMatch[1]).value)) {
      throw new Error(field.noMatch[0]);
    }
  }
  if (field.isEmail) {
    if (!this.isEmail(text)) {
      throw new Error(field.isEmail);
    }
  }
  if (field.isZip) {
    if (!this.isZip(text)) {
      throw new Error(field.isZip);
    }
  }
  if (field.isCardNumber) {
    if (!this.isCardNumber(text)) {
      throw new Error(field.isCardNumber);
    }
  }
  if (field.isDate) {
    if (!this.isDate(text)) {
      throw new Error(field.isDate);
    }
  }
  if (field.exprired) {
    if (this.hasExpired(text)) {
      throw new Error(field.exprired);
    }
  }
};

RegistrationForm.prototype.setError = function (fieldName, message) {
  // $(fieldName + "_error").setAttribute("class", "error");
  $(fieldName + "_error").innerHTML = message;
};

RegistrationForm.prototype.clearError = function (fieldName, message) {
  // $(fieldName + "_error").setAttribute("class", "");
  $(fieldName + "_error").innerHTML = "";
};

RegistrationForm.prototype.resetForm = function () {
  for (var fieldName in fields) {
    this.clearError(fieldName, fields[fieldName].message);
    $(fieldName).value = ""; //clear corresponding textbox
  }
};

RegistrationForm.prototype.validateForm = function () {
  var isOK = true;
  for (var fieldName in fields) {
    this.clearError(fieldName);
    try {
      this.validateField(fieldName, $(fieldName).value);
    } catch (error) {
      isOK = false;
      this.setError(fieldName, error.message);
    }
  }
  return isOK;
};
