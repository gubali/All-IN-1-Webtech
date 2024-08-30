const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.set("view engine", "pug");
app.set("views", "views");
const adminData = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(adminData.routes);
app.use(shopRoutes);
// add 404
app.use((req, res, next) => {
  res.status(402).send("<h2>Page not found!</h2>");
});
app.listen(3000);
