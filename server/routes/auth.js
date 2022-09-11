const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");
const { SECRET_KEY } = require("../constants");

const router = express.Router();

router.post(
  "/signup",
  [
    body("email", "Email must be Valid").isEmail(),
    body("username", "Username must be 5 letter.").isLength({ min: 5 }),
    body("password", "Password must 5 letter.").isLength({ min: 5 }),
    body("fullname", "Fullname must be 5 letter ").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password, fullname, username } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const securePassword = bcrypt.hashSync(password, salt);
    const existing_user = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existing_user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User already exists." }] });
    }
    try {
      const user = await User.create({
        username,
        email,
        fullname,
        password: securePassword,
      });
      res.json(user);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
);

router.post(
  "/login",
  [
    body("username", "Please provide username.").not().isEmpty(),
    body("password", "Please provide password.").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { password, username } = req.body;
    // Fetch User
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(401)
        .json({ errors: [{ msg: "Invalid credentials." }] });
    }
    // Validate Password
    const samePassword = await bcrypt.compare(password, user.password);
    if (!samePassword) {
      return res.status(401).json({ errors: [{ msg: "Invalid password." }] });
    }
    // Generate token
    const token = jwt.sign(
      { id: user._id, fullname: user.fullname },
      SECRET_KEY
    );
    res.json({ token });
  }
);

module.exports = router;
