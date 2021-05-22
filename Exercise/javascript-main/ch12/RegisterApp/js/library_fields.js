var fields = {
  email: {
    message: "Must be a valid email address",
    required: "Email is required",
    isEmail: "Email is invalid",
  },
  password: {
    required: "Password is required",
  },
  verify: {
    required: "Please retype your password",
    noMatch: ["Password does not match", "password"],
  },
  first_name: {
    required: "First name is required",
  },
  last_name: {
    required: "Last name is required",
  },
  zip: {
    message: "Use  5 or 9 digit zip code",
    required: "Zip code is required",
    isZip: "Zip code is invalid",
  },
  card_number: {
    message: "Use 9999-9999-9999-9999 format",
    required: "Card number is required",
    isCardNumber: "Card number is invalid",
  },
  exp_date: {
    message: "Use mm/yyyy format",
    required: "Expiration date is required",
    isDate: "Expiration date is invalid",
    exprired: "Card has expired",
  },
};
