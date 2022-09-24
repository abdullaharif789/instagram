const express = require("express");

const User = require("../models/User");
const userAuth = require("../middlewares/userAuth");

const router = express.Router();

router.get("/profile", userAuth, async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  const stats = { following: 10, followers: 15, posts: 10 };
  res.json({ user, stats });
});

module.exports = router;
