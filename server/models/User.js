const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  fullname: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
const User = mongoose.model("users", UserSchema);
User.createIndexes();
module.exports = User;
