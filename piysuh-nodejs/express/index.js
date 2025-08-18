const express = require('express');
const app = express();
app.get('/', function (req, res) {
    console.log(req.method);
    res.end("Welcome to home!");
});
app.get('/contact', function (req, res) {
    res.end('Contact info');
});

app.post('/tweet', function (req, res) {
    res.status(201).end("tweet as post method");
});
app.listen(8000, () => console.log(`server runnong on port 8000`));
