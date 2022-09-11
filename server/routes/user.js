const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");
const userAuth = require("../middlewares/userAuth");

const router = express.Router();
const SECRET_KEY = "umerlovesyashfa";

router.get("/profile", userAuth, async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  const stats = { following: 10, followers: 15, posts: 10 };
  res.json({ user, stats });
});

module.exports = router;
