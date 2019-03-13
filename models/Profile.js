const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create shema
const ProfileSchema = new Schema({
  userName: {
    type: Schema.Types.ObjectId,
    ref: "userName",
    required: true
  },

  expStats: [
    {
      wins: {
        type: Number,
        required: true,
        default: 0
      },
      loses: {
        type: Number,
        required: true,
        default: 0
      },
      draws: {
        type: Number,
        required: true,
        default: 0
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
