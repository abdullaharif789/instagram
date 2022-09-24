const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  description: { type: String, default: null },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },

  img: {
    data: Buffer,
    contentType: String,
  },
});
const Post = mongoose.model("posts", PostSchema);

module.exports = Post;
