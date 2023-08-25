const express = require("express");
const rootDir = require("../util/path");
const router = express.Router();
const path = require("path");
const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log(adminData.products, "adminData");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
