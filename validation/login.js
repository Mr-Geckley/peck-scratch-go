const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.userName = !isEmpty(data.userName) ? data.userName : "";
  data.passWord = !isEmpty(data.passWord) ? data.passWord : "";

  if (!validator.isLength(data.userName, { min: 2, max: 30 })) {
    errors.userName = "Name must be between 2 and 30 characters";
  }

  if (!validator.isLength(data.passWord, { min: 6, max: 20 })) {
    errors.passWord = "Password must be between 6 and 20 characters";
  }

  if (validator.isEmpty(data.userName)) {
    errors.userName = "Name field is required";
  }

  if (validator.isEmpty(data.passWord)) {
    errors.passWord = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
