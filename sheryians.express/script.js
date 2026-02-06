const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use((req, res, next) => {
    console.log(req);
    next();
})
app.use(express.static('./public'));
app.get('/', (req, res) => {
    res.send('Hello')
})
app.get('/getUser', (req, res) => {
    res.render('Home', {name:'Food Cafe!'})
});
app.get("/profile/:username", (req, res) => {
    res.send(`Hello profile ${req.params.username}`);
})
app.listen(3000);