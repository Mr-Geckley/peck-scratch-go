const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.userName = !isEmpty(data.userName) ? data.userName : "";
  data.passWord = !isEmpty(data.passWord) ? data.passWord : "";
  data.confPassWord = !isEmpty(data.confPassWord) ? data.confPassWord : "";

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

  if (validator.isEmpty(data.confPassWord)) {
    errors.confPassWord = "Password confirmation is required";
  }

  if (!validator.equals(data.passWord, data.confPassWord)) {
    errors.confPassWord = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
