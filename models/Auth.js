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
  },
  exp: [
    {
      wins: {
        type: Number,
        default: 0
      },
      losses: {
        type: Number,
        default: 0
      },
      ties: {
        type: Number,
        default: 0
      }
    }
  ]
});

module.exports = Auth = mongoose.model("auth", AuthSchema);
