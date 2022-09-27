const mongoose = require("mongoose");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  text: { type: String },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  date: { type: Date, default: Date.now },
});
const Comment = mongoose.model("comments", CommentSchema);

module.exports = Comment;
