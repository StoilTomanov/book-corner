const { verifySession } = require("../services/user");

module.exports = () => (req, res, next) => {
    const token = req.headers['x-authorization'];
    try {
        if (token) {
            const userData = verifySession(token);
            req.user = userData;
        }
        next();
    } catch (error) {
        console.error(error.message);
        res.status(498).json({ message: 'Invalid access token' });
    }
}