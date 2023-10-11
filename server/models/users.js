const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  // create a validator here - look up online
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
