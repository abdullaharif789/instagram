const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/user");

const User = mongoose.model(
  "users",
  mongoose.Schema({
    email: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
  })
);
module.exports = { User };
