const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const app = express();
// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layout",
//     defaultLayout: "master-layout",
//     extname: "hbs",
//   })
// );
app.set("view engine", "ejs");
app.set("views", "views");
// app.set("views", "hbs");
//app.set("views", "views");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(adminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found!!" });
});
app.listen(3000);
