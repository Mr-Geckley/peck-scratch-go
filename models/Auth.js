const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define schema
const AuthSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  passWord: {
    type: String,
    required: true
  }
});

module.exports = Auth = mongoose.model("auth", AuthSchema);
