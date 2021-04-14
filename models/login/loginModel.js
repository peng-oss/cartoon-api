const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({
  name: String,
  password: Number,
});

const LoginModel = mongoose.model("Login", LoginSchema, "login");

module.exports = LoginModel;
