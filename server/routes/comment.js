const express = require("express");
const router = express.Router();

const Comment = require("../models/Comment");
const Post = require("../models/Post");

const userAuth = require("../middlewares/userAuth");

// Uploading Post
router.post("/", userAuth, async (req, res) => {
  const { text, post, user } = req.body;
  try {
    const _post = await Post.findById(post);
    const comment = await Comment.create({ text, post, user });
    // May done with findByIdAndUpdate
    _post.comments.push(comment._id);
    _post.save();
    res.json(comment);
  } catch (error) {
    res.status(400).send({ message: "Invalid post!!!" });
  }
});

//Exporting Module
module.exports = router;
