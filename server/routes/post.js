const multer = require("multer");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const Post = require("../models/Post");
const userAuth = require("../middlewares/userAuth");
const { BACKEND_URL } = require("../constants");

// Uploading a Post
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/posts");
  },
  filename: (req, file, cb) => {
    let image = file.originalname.split(".");
    let image_extension = image[image.length - 1];
    let image_name = uuidv4() + "." + image_extension;
    cb(null, image_name);
  },
});

const upload = multer({ storage: storage });

// Uploading Post
router.post("/", userAuth, upload.single("image"), async (req, res) => {
  const post = await Post.create({
    description: req.body.description,
    image: "posts/" + req.file.filename,
    user: req.userId,
  });
  post.image = BACKEND_URL + post.image;
  return res.json(post);
});

// Getting Post
router.get("/", userAuth, async (req, res) => {
  var posts = await Post.find().sort({ date: -1 }).populate({
    path: "user",
    select: "fullname username",
  });
  posts = posts.map((post) => ({
    ...post.toObject(),
    image: BACKEND_URL + post.image,
  }));
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
