import express from 'express';
import router from './routes/user-routes.js';
import db from './db/index.js';
import adminRouter from './routes/admin.routes.js'
import { userTable, userSessions } from './db/schema.js';
import { eq } from 'drizzle-orm';
import jwt from 'jsonwebtoken';
import { authenticationMiddleware } from './middlewares/auth.middleware.js'
const app = express();
const PORT = process.env.PORT ?? 9000;
app.use(express.json());
app.use(authenticationMiddleware);
app.get('/', (req, res) => {
    return res.json({ status: 'Server up and running' });
});
app.use('/user', router);
app.use('/admin', adminRouter);
app.listen(PORT, () => console.log(`Server is running`));