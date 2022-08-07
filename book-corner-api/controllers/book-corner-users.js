const router = require('express').Router();
const errorMapper = require('../utils/errorMapper');
const userService = require('../services/user');

router.post('/login', async(req, res) => {
    userRequestHandler(req, res, '/login', {
        username: req.body.username.trim(),
        password: req.body.password.trim(),
    }, 200);
});

router.post('/register', async(req, res) => {
    userRequestHandler(req, res, '/register', {
        username: req.body.username.trim(),
        email: req.body.email.trim().toLowerCase(),
        password: req.body.password.trim(),
        gender: req.body.gender,
    }, 201);
});

router.get('/logout', (req, res) => {
    if (req.user) {
        userRequestHandler(req, res, '/logout', {
            token: req.user.token,
        }, 200);
        res.status(204).end();
    } else {
        res.status(500).end();
    }
});

async function userRequestHandler(req, res, path, userData, statusCode) {
    let result;
    try {
        switch (path) {
            case '/login':
                req.user = result;
                result = await userService.login(userData.username, userData.password);
                break;
            case '/register':
                req.user = result;
                result = await userService.register(userData.username, userData.email, userData.password, userData.gender);
                break;
            case '/logout':
                result = userService.logout(userData.token);
                break;
            default:
                console.error('No such path');
        }
        res.status(statusCode).json(result);
    } catch (error) {
        console.error(error.message);
        const mappedError = errorMapper(error);
        res.status(400).json({ message: mappedError });
    }
}

module.exports = router;