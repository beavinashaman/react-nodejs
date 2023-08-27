const express = require("express");
// const rootDir = require("../util/path");
const router = express.Router();
// const path = require("path");
// const adminData = require("./admin");

const produtsController = require("../controllers/products");


router.get("/", produtsController.getProducts);

module.exports = router;
