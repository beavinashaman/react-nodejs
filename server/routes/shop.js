const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>This is express!</h1>");
  next();
});

module.exports = router;
