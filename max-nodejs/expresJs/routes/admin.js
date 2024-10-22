const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const rootDirectory = require("../utils/path");
const rcvShopData = require("./shop");
const adminData = require("./admin");
const products = [];
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDirectory, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product...",
    path: "add-product",
    activeProduct: true,
    productCss: true,
  });
});
router.get("/user-form", (req, res, next) => {
  // res.sendFile(path.join(rootDirectory, "views", "form.html"));
  res.render("user-form", { pageTitle: "User Form Page" });
});
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(products);
  console.log("shop data to admin", rcvShopData.shopData);
  fs.writeFile(
    "request-data.txt",
    `${req.body.title} ${new Date().toLocaleDateString()}\n`,
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File written succesfully");
      }
    }
  );
  res.redirect("/");
});
// module.exports = router;
exports.routes = router;
exports.products = products;
