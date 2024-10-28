const mongoose = require("mongoose");
const generate = require("../helpers/generate");

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  token: {
    type: String,
    default: generate.generateRandomString(20)
  },
  avatar: {
    type : String,
    default : ""
  },
  deleted: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;