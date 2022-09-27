const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  description: { type: String, default: null },
  image: { type: String, default: null },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
    },
  ],
  date: { type: Date, default: Date.now },
});
const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
