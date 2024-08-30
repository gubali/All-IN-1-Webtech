const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const rootDirectory = require("../utils/path");
const rcvShopData = require("./shop");
const products = [];
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDirectory, "views", "add-product.html"));
});
router.get("/user-form", (req, res, next) => {
  res.sendFile(path.join(rootDirectory, "views", "form.html"));
});
router.post("/add-product", (req, res, next) => {
  debugger;
  products.push({ enterKey: req.body.name });
  console.log(products);
  console.log("shop data to admin", rcvShopData.shopData);
  fs.writeFile(
    "request-data.txt",
    `${req.body.name} ${new Date().toLocaleDateString()}\n`,
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
