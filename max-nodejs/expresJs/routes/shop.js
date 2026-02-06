const express = require("express");
const os = require("os");
const path = require("path");
const router = express.Router();
const rootDirectory = require("../utils/path");
const adminData = require("./admin");
const shopData = [];
console.log("CPU architecture: " + os.cpus().length);
router.get("/", (req, res, next) => {
  shopData.push({ shopKey: "test shop data" });
  const products = adminData.products;
  console.log("asif", products);
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    activeShop: true,
    productCss: true,
    hasProduct: products.length > 0,
  });
});
module.exports = router;
