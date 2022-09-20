const jwt = require("jsonwebtoken");
const { SECRET_KEY, HEADER_TOKEN_KEY } = require("../constants");
const userAuth = (req, res, next) => {
  try {
    const token = req.headers[HEADER_TOKEN_KEY];
    const user = jwt.verify(token, SECRET_KEY);
    req.userId = user.id;
    next();
  } catch (error) {
    res.status(401).json({ errors: [{ msg: "Invalid token." }] });
  }
};

module.exports = userAuth;
