const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = require('../utils/jwt-secret');

const blacklist = [];

async function login(username, password) {
    const user = await User.findOne({ username: new RegExp(`^${username}$`, 'i') })

    if (!user) {
        throw new Error('Incorrect username or password.')
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        throw new Error('Incorrect username or password.');
    } else if (match) {
        return createSession(user);
    }
}

async function register(username, email, password, gender) {

    const existing = await User.findOne({ username: new RegExp(`^${username}$`, 'i') })
    if (existing) {
        throw new Error('User already exists.');
    }

    const hasAdmin = await User.find({});
    const user = new User({
        email,
        username,
        gender,
        isAdmin: hasAdmin.length === 0 ? true : false,
        hashedPassword: await bcrypt.hash(password, 10),
    });

    await user.save();
    return createSession(user);
}

function logout(token) {
    blacklist.push(token);
    return [{ message: 'Logged out' }];
}

async function getUserData(userId) {
    const result = await User.findOne({ _id: userId });
    return result;
}

function verifySession(token) {
    const payload = jwt.verify(token, JWT_SECRET);
    if (blacklist.includes(token)) {
        throw new Error('Invalid token');
    }
    return {
        username: payload.username,
        email: payload.email,
        _id: payload._id,
        token,
    }
}

function createSession(user) {
    return {
        email: user.email,
        username: user.username,
        _id: user._id,
        isAdmin: user.isAdmin,
        accessToken: jwt.sign({
            username: user.username,
            email: user.email,
            _id: user._id
        }, JWT_SECRET, {
            expiresIn: '10 hours',
        })
    };
}

async function updateUserData(userData, userId) {
    const user = await User.findOne({ _id: userId });
    console.log('user', user);
    if (!user) {
        throw new Error('User does not exists.')
    }

    if(userData.password === '') {
        user.email = userData.email;
        user.username = userData.username;
        user.address = userData.address;
        user.telephone = userData.telephone;
        user.birthDate = userData.birthDate;
        await user.save();
        return user;
    } else {
        user.email = userData.email;
        user.username = userData.username;
        user.address = userData.address;
        user.telephone = userData.telephone;
        user.birthDate = userData.birthDate;
        user.hashedPassword = await bcrypt.hash(userData.password, 10);
        await user.save();
        return user;
    }
}

module.exports = {
    verifySession,
    login,
    register,
    logout,
    getUserData,
    updateUserData,
}