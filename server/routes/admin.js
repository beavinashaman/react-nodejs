const express = require("express");
// const rootDir = require("../util/path");
// const path = require("path");
const produtsController = require("../controllers/products");

const router = express.Router();

router.get("/add-product", produtsController.getAddProduct);

router.post("/add-product", produtsController.postAddProduct);

module.exports = router;
