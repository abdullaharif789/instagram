const express = require("express");

const Post = require("../models/Post");
const userAuth = require("../middlewares/userAuth");

const fs = require("fs");
const multer = require("multer");

const router = express.Router();

// Uploading a Post
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// Uploading Post
router.post("/", userAuth, upload.single("testImage"), async (req, res) => {
  const post = await Post.create({
    description: req.body.description,
    img: {
      data: fs.readFileSync("uploads/" + req.file.filename),
      contentType: "image/png",
    },
    user: req.userId,
  });
  return res.json(post);
});

// Getting Post
router.get("/", userAuth, async (req, res) => {
  console.log(req.userId);
  const posts = await Post.find({
    user: req.userId,
  });
  res.json(posts);
});

// Deleting Post
router.get("/:id", async (req, res) => {
  const deletePost = await Post.findById(req.params.id);
  deletePost = await Post.findByIdAndDelete(req.params.id);
  res.json({ a: "success post has been deleted" });
});

//Exporting Module
module.exports = router;
