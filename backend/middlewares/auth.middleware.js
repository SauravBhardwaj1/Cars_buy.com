const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      var decoded = jwt.verify(token.split(" ")[1], "secret");
      if (decoded) {
        next();
      } else {
        res.status(400).json({ msg: "Error verifying token" });
      }
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } else {
    res.status(400).json({ msg: "Please login first!!!" });
  }
};

module.exports = { auth };
