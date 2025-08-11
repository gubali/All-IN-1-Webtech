const fs = require("fs");
const url = require('url');
const express = require("express");
const app = express();  // handler method
const port = 4200;
app.get('/', (req, res) => {
    return res.send("First server home!!");
});

app.get("/about", (req, res) => {
    return res.send("About Us" + `Hey ${req.query.name} location i ${req.query.loc}`);
});

app.listen(port, () => {
    console.log(`App listed on port ${port}`);
})
