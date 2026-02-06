import express from 'express';
import db from '../db/index.js';
import { userTable, userSessions } from '../db/schema.js';
import { eq } from 'drizzle-orm';
import { randomBytes, createHmac } from 'node:crypto';
import jwt from 'jsonwebtoken';
import { ensureAuthenticated, restrictToRole } from '../middlewares/auth.middleware.js'
const router = express.Router();

router.patch('/', ensureAuthenticated, async (req, res) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ error: '!!You are not logged!' })
    }
    const { name } = req.body;
    await db.update(userTable).set({ name }).where(eq(userTable.id, user.id));
    return res.json({ status: 'success' });
});
router.get('/', ensureAuthenticated, async (req, res) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ error: 'You are not logged!!!!' })
    }
    return res.json({ user });
});

router.get('/getSessionList', ensureAuthenticated, async (req, res) => {
    const usersSessionList = await db.select().from(userSessions);
    return res.json(usersSessionList);

});

// current login
router.post("/signup", async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    const [existingUser] = await db.select(
        {
            email: userTable.email
        }
    ).from(userTable)
        .where(table => eq(table.email, email));
    if (existingUser) {
        return res.status(400).json({ error: `user with email ${email} already exist!` })
    }
    const salt = randomBytes(256).toString('hex');
    const hashPassword = createHmac('sha256', salt)
        .update(password).digest('hex');

    const [user] = await db.insert(userTable).values({
        name,
        email,
        password: hashPassword,
        salt,
    }).returning({ id: userTable.id });
    return res.status(201).json({ status: 'success', data: { userId: user.id } });
});
router.post('/login', restrictToRole, async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'email and password are required!' });
    }
    console.log("-------", req.body);
    const [existingUser] = await db.select({
        id: userTable.id,
        email: userTable.email,
        name: userTable.name,
        roleType: userTable.roleType,
        salt: userTable.salt,
        password: userTable.password,
    }).from(userTable).where((table) => eq(table.email, email));
    if (!existingUser) {
        return res.status(404).json({ error: `email id does not exist!` })
    }
    const salt = existingUser.salt;
    const existingHash = existingUser.password;
    const newHash = createHmac('sha256', salt).update(password).digest('hex');
    if (newHash !== existingHash) {
        return res.status(404).json({ error: `Invalid credential!` })
    }
    // session
    // const [session] = await db.insert(userSessions).values({
    //     userId: existingUser.id
    // }).returning({
    //     id: userSessions.id
    // });
    const payLoad = {
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name,
        role: existingUser.roleType,

    }
    console.log(payLoad);
    const token = jwt.sign(payLoad, process.env.JWT_SECRET, { expiresIn: '1m' })
    const role = existingUser.roleType;
    console.log("*********************");
    console.log(role);
    return res.json({ status: 'success2', token, role });
});

export default router
