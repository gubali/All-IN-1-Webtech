const express = require("express");
const app = express();
const user = require('./MOCK_DATA.json');
const PORT = 8000;

//get
app.get('/api/users', (req, res) => {
    // return res.send(`Hello ${req.query.name}`);
    return res.json(user)
});

app.get('/users', (req, res) => {
    const html = `
  <h1>User List:</h1>
  <input type="text" placeholder="Search by name" />
  <ul>
  ${user.map(elem => `<li><h5>${elem.first_name} ${elem.last_name}</h5>`).join('')}
  </ul>
  `
  res.send(html);
});
app.post('/ap/user/:id', (req, res) => {
    const id = Number(req.params.id);
   // const user = u

})
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});