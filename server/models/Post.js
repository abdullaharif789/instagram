const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  image: { type: String, required: true },
  description: { type: String, default: null },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: { type: Date, default: Date.now },
});
const Post = mongoose.model("posts", PostSchema);
Post.createIndexes();
module.exports = Post;
