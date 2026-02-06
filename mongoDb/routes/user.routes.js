import express from 'express';
import User from '../model/user.model.js';
import { randomBytes, createHmac } from 'crypto';
import jwt from 'jsonwebtoken';
const router = express.Router();
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({
        email
    });
    console.log(existUser);
    if (existUser) {
        return res.status(400).json({ error: `User with email ${email} already exist` })
    }
    const salt = randomBytes(sha256).toString('hex');
    const hashedPassword = createHmac('sha256', salt)
        .update(password).digest('hex');
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        salt
    });
    return res.status(201).json({ status: 'success', data: { id: user._id } })
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const existUserByEmail = await User.findOne({
        email
    });
    if (!existUserByEmail) {
        return res.status(404).json({ error: `User with email ${email} does not exist` })
    }
    const salt = existUserByEmail.salt;
    const hashed = existUserByEmail.password;
    const newHash = createHmac('sha256', salt)
        .update(password).digest('hex');
    if (hashed !== newHash) {
        return res.status(400).json({ erro: "wrong password" })
    }
    const payload = {
        name: existUserByEmail.name,
        _id: existUserByEmail._id,
        email: existUserByEmail.email
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    return res.json({ status: 'success', token });
});
export default router;