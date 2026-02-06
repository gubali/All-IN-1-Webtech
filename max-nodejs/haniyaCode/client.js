const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
// middleware 1
app.use((req, res, next) => {
  console.log("Middle ware 1");
  req.name = "m1.dev";
  fs.appendFile(
    "mylog.txt",
    `${new Date().toLocaleDateString()} : ${req.method} : ${req.path}\n`,
    (err, data) => {
      next();
    }
  );
  // return res.json({ msg: "Middle ware 12wqw" });
});
// middleware 2
app.use((req, res, next) => {
  console.log("Middle ware 22", req.name);
});
const server = http.createServer(app);
server.listen(4000);
