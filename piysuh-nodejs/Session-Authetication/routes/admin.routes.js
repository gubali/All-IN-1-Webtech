import express from 'express';
import db from '../db/index.js';
import { userTable } from '../db/schema.js'
import { error } from 'console';
import { ensureAuthenticated, restrictToRole } from '../middlewares/auth.middleware.js'
const router = express.Router();
const adminToRestrict = restrictToRole("ADMIN");
router.use(ensureAuthenticated, adminToRestrict);
router.get('/users', async (req, res) => {
    console.log("*******admin***************");
    const users = await db.select(
        {
            id: userTable.id,
            name: userTable.name,
            email: userTable.email,
            roleType: userTable.roleType
        }
    ).from(userTable);
    return res.json({ users });
});

export default router