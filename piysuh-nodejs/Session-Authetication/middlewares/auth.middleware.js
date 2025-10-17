
import { ne } from 'drizzle-orm';
import jwt from 'jsonwebtoken';
export const authenticationMiddleware = async function (req, res, next) {
    try {
        const tokenHeader = req.headers['authorization'];
        if (!tokenHeader) {
            return next();
        }
        if (!tokenHeader.startsWith('Bearer')) {
            return res.status(400).json({ error: 'Authorization must start with bearer' })
        }
        const token = tokenHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        next()
    }
}

export const ensureAuthenticated = async function (req, res, next) {
    if (!req.user) {
        return res.status(401).json({ error: 'You must be authneticated' });
    }
    next();
}

export const restrictToRole = (role) => {
    return async function (req, res, next) {
        try {
            if (!req.user) {
                return res.status(401).json({ error: 'You must be authneticated' });
            }
            if (req.user.roleType !== role) {
                return res.status(401).json({ error: 'You are not authorized to access this route' });
            }
            next();

        } catch (error) {
            // next(error);
        }

    }
}