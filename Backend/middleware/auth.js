const jwt = require('jsonwebtoken');
const { verifyToken } = require('../utils/jwt');

const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header

    if (!token) {
        return res.sendStatus(403); // Forbidden
    }

    jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret', (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user; // Save user info to request
        next();
    });
};

const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        console.log(allowedRoles);
        if (!allowedRoles.includes(req.user.role)) {
            return res.sendStatus(403); // Forbidden
        }
        next();
    };
};

module.exports = {
    authenticateJWT,
    authorizeRoles,
};
