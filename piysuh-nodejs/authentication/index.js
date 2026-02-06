import express from 'express';
const app = express();
const port = 8000;
app.use(express.json())
const DIARY = {

}; //db
const EMAIL = new Set();
app.post('/signUp', (req, res) => {
    const { name, email, passwprd } = req.body;
    if (EMAIL.has(email)) {
        return res.status(400).json({ error: `Email already taken` });
    }
    const token = `${Date.now()}`;
    DIARY[token] = { name, email, passwprd };
    EMAIL.add(email);
    return res.json({ status: 'success', token });

});
app.post('/me', (req, res) => {
    const { token } = req.body;
    if (!token) {
        return res.status(400).json({ error: `missing token` });
    }
    if (!(token in DIARY)) {
        return res.status(400).json({ error: `Invalid token` });
    }
    console.log(DIARY);
    const entry = DIARY[token];
    return res.json({ data: entry })
})
app.listen(port, () => console.log(`Server running on ${port}`))