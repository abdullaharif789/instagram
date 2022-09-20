const express = require("express");

const Post = require("../models/Post");
const userAuth = require("../middlewares/userAuth");

const router = express.Router();

router.get("/", userAuth, async (req, res) => {
  const posts = await Post.find({ user: req.userId });
  return res.json(posts);
});

router.post("/", userAuth, async (req, res) => {
  const post = await Post.create({ image: req.body.image, user: req.userId });
  return res.json(post);
});

module.exports = router;
