const express = require("express");
const path = require("path");
const router = express.Router();
const rootDirectory = require("../utils/path");
const adminData = require("./admin");
const shopData = [];
router.get("/", (req, res, next) => {
  // if (adminData.products.length !== 0) {
  //   console.log(
  //     "admin data to shop:",
  //     adminData.products.map((obj) => obj.enterKey)
  //   );
  // }
  shopData.push({ shopKey: "test shop data" });
  const products = adminData.products.enterKey;
  // res.sendFile(path.join(rootDirectory, "views", "shop.html"));
  res.render("shop", { prods: products, docTitle: "Shop the product" });
});
// exports.routes = router;
module.exports = router;
// exports.routes = router;
exports.shopData = shopData;
